/* SOUL BROTH CO. — page behaviour
   menu render · pickup cart · weekly-route status · Leaflet map · motion */
(function () {
  "use strict";

  var MENU = (window.SBC && window.SBC.MENU) || [];
  var ROUTE = (window.SBC && window.SBC.ROUTE) || [];
  var TAGS = (window.SBC && window.SBC.TAGS) || {};
  var TAX_RATE = (window.SBC && window.SBC.TAX_RATE) || 0;
  var CART_KEY = "sbc_cart_v1";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- money + time helpers ---------- */
  function money(n) { return "$" + n.toFixed(2); }
  function itemById(id) {
    for (var c = 0; c < MENU.length; c++) {
      for (var i = 0; i < MENU[c].items.length; i++) {
        if (MENU[c].items[i].id === id) return MENU[c].items[i];
      }
    }
    return null;
  }
  function fmt12(h) {
    var hh = Math.floor(h + 1e-9), mm = Math.round((h - hh) * 60);
    var ap = hh >= 12 ? "PM" : "AM", h12 = hh % 12 || 12;
    return (mm ? h12 + ":" + String(mm).padStart(2, "0") : "" + h12) + " " + ap;
  }
  function fmt12c(h) {
    var hh = Math.floor(h + 1e-9), mm = Math.round((h - hh) * 60);
    var ap = hh >= 12 ? "p" : "a", h12 = hh % 12 || 12;
    return (mm ? h12 + ":" + String(mm).padStart(2, "0") : "" + h12) + ap;
  }

  /* ---------- weekly-route status ---------- */
  function routeForDay(d) {
    for (var i = 0; i < ROUTE.length; i++) if (ROUTE[i].day === d) return ROUTE[i];
    return null;
  }
  function computeStatus(now) {
    now = now || new Date();
    var day = now.getDay();
    var cur = now.getHours() + now.getMinutes() / 60;
    var today = routeForDay(day);
    if (today && !today.closed && cur >= today.open && cur < today.close) {
      return { open: true, entry: today, sameDay: true };
    }
    for (var i = 1; i <= 7; i++) {
      var e = routeForDay((day + i) % 7);
      if (e && !e.closed) return { open: false, entry: e, inDays: i };
    }
    return { open: false, entry: today || ROUTE[0], inDays: 0 };
  }

  /* ---------- cart ---------- */
  var cart = loadCart();
  function loadCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      var obj = raw ? JSON.parse(raw) : {};
      var clean = {};
      Object.keys(obj).forEach(function (k) {
        if (itemById(k) && obj[k] > 0) clean[k] = Math.min(20, obj[k] | 0);
      });
      return clean;
    } catch (e) { return {}; }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }
  function cartCount() {
    return Object.keys(cart).reduce(function (s, k) { return s + cart[k]; }, 0);
  }
  function cartTotals() {
    var sub = 0;
    Object.keys(cart).forEach(function (k) {
      var it = itemById(k); if (it) sub += it.price * cart[k];
    });
    var tax = sub * TAX_RATE;
    return { sub: sub, tax: tax, total: sub + tax };
  }
  function setQty(id, delta) {
    var n = (cart[id] || 0) + delta;
    if (n <= 0) delete cart[id]; else cart[id] = Math.min(20, n);
    saveCart();
    syncControls();
    renderTicket();
    if (delta > 0) {
      var it = itemById(id);
      if (it) toast("Added · " + it.name);
    }
  }

  /* ---------- render: menu ---------- */
  function ctlHTML(id) {
    var q = cart[id] || 0;
    if (!q) return '<button class="mi__add" data-add="' + id + '" type="button">Add</button>';
    return '<div class="mi__step">' +
      '<button type="button" data-dec="' + id + '" aria-label="One fewer">−</button>' +
      '<span class="mi__step-n" aria-live="polite">' + q + '</span>' +
      '<button type="button" data-inc="' + id + '" aria-label="One more">+</button>' +
      "</div>";
  }
  function renderMenu() {
    var list = $("#menuList");
    var html = "";
    MENU.forEach(function (cat) {
      html += '<div class="menu__cat reveal">';
      html += '<h3 class="menu__cat-name">' + cat.name + "</h3>";
      if (cat.note) html += '<p class="menu__cat-note">' + cat.note + "</p>";
      cat.items.forEach(function (it) {
        var tags = (it.tags || []).map(function (t) {
          return '<span class="tag" title="' + (TAGS[t] || t) + '">' + t + "</span>";
        }).join("");
        html += '<article class="mi" data-id="' + it.id + '">' +
          '<h4 class="mi__name">' + it.name + "</h4>" +
          '<span class="mi__price">' + money(it.price) + "</span>" +
          '<p class="mi__desc">' + it.desc + "</p>" +
          '<div class="mi__foot">' +
            '<div class="mi__tags">' + tags + "</div>" +
            '<div class="mi__ctl">' + ctlHTML(it.id) + "</div>" +
          "</div>" +
        "</article>";
      });
      html += "</div>";
    });
    list.innerHTML = html;

    var legendKeys = Object.keys(TAGS);
    $("#menuLegend").textContent = legendKeys.map(function (k) {
      return k + " = " + TAGS[k].toLowerCase();
    }).join("   ·   ") + "   ·   add a soft egg to any bowl $2";
  }
  function syncControls() {
    $$(".mi").forEach(function (mi) {
      var id = mi.getAttribute("data-id");
      var ctl = $(".mi__ctl", mi);
      if (ctl) ctl.innerHTML = ctlHTML(id);
    });
  }

  /* ---------- render: ticket ---------- */
  function renderTicket() {
    var wrap = $("#ticketItems");
    var empty = $("#ticketEmpty");
    var totalsEl = $("#ticketTotals");
    var placeBtn = $("#placeBtn");
    var ids = Object.keys(cart);

    if (!ids.length) {
      wrap.innerHTML = "";
      empty.hidden = false;
      totalsEl.hidden = true;
      placeBtn.disabled = true;
      return;
    }
    empty.hidden = true;
    totalsEl.hidden = false;
    placeBtn.disabled = false;

    wrap.innerHTML = ids.map(function (id) {
      var it = itemById(id), q = cart[id];
      return '<div class="trow">' +
        '<span class="trow__step">' +
          '<button type="button" data-dec="' + id + '" aria-label="One fewer ' + it.name + '">−</button>' +
          "<span>" + q + "</span>" +
          '<button type="button" data-inc="' + id + '" aria-label="One more ' + it.name + '">+</button>' +
        "</span>" +
        '<span class="trow__name">' + it.name + "</span>" +
        '<span class="trow__price">' + money(it.price * q) + "</span>" +
      "</div>";
    }).join("");

    var t = cartTotals();
    $("#tSub").textContent = money(t.sub);
    $("#tTax").textContent = money(t.tax);
    $("#tTotal").textContent = money(t.total);
  }

  /* ---------- pickup form ---------- */
  var STATUS = computeStatus();

  function pickupSlots() {
    var e = STATUS.entry, out = [];
    var start, end = e.close;
    if (STATUS.open) {
      var now = new Date(), cur = now.getHours() + now.getMinutes() / 60;
      start = Math.ceil((cur + 1 / 3) * 4) / 4;
      if (start < e.open) start = e.open;
    } else {
      start = e.open;
    }
    for (var t = start; t < end && out.length < 12; t += 0.25) out.push(t);
    if (!out.length) out.push(e.open);
    return out;
  }
  function fillPickup() {
    var sel = $("#pickupTime");
    var opts = "";
    if (STATUS.open) opts += '<option value="asap">ASAP — about 15 min</option>';
    pickupSlots().forEach(function (t) {
      opts += '<option value="' + t.toFixed(2) + '">' + fmt12(t) + "</option>";
    });
    sel.innerHTML = opts;

    var e = STATUS.entry;
    $("#pickupPlace").textContent = e.place + " · " + e.area;
  }
  function timeText(val) {
    if (val === "asap") return "in about 15 min";
    return "around " + fmt12(parseFloat(val));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    var errEl = $("#formError");
    var name = $("#custName").value.trim();
    var phoneDigits = $("#custPhone").value.replace(/\D/g, "");
    var timeVal = $("#pickupTime").value;
    var problems = [];

    if (!cartCount()) problems.push("Add at least one item to your ticket.");
    if (!name) problems.push("We need a name for the order.");
    if (phoneDigits.length < 10) problems.push("Enter a 10-digit mobile number so we can text you.");
    if (!timeVal) problems.push("Pick a pickup time.");

    if (problems.length) {
      errEl.textContent = problems[0];
      errEl.hidden = false;
      return;
    }
    errEl.hidden = true;

    var t = cartTotals();
    var count = cartCount();
    var num = "SB-" + (1000 + Math.floor(Math.random() * 9000));
    var e = STATUS.entry;

    $("#confirmNum").textContent = num;
    $("#confirmLine").textContent =
      count + (count === 1 ? " item" : " items") + " · " + money(t.total) +
      " · ready " + timeText(timeVal) + " at " + e.place;

    $("#pickupForm").hidden = true;
    var box = $("#confirm");
    box.hidden = false;
    if (!reduceMotion) { void box.offsetWidth; box.classList.add("is-printing"); }
    box.setAttribute("tabindex", "-1");
    box.focus({ preventScroll: true });
    box.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });

    cart = {};
    saveCart();
    syncControls();
    renderTicket();
  }

  function newOrder() {
    var box = $("#confirm");
    box.hidden = true;
    box.classList.remove("is-printing");
    $("#pickupForm").hidden = false;
    $("#formError").hidden = true;
    $("#custName").focus();
  }

  /* ---------- find: schedule + status lines ---------- */
  function renderStatusLines() {
    var e = STATUS.entry;
    var heroEl = $("#heroStatus");
    var heroText = $(".chit__text", heroEl);
    var findEl = $("#findNow");

    if (STATUS.open) {
      heroText.textContent = "Open now · " + e.place + " · til " + fmt12c(e.close);
      heroEl.classList.remove("is-closed");
      findEl.textContent = "Open now — here til " + fmt12(e.close) + " at " + e.place;
      findEl.classList.remove("is-closed");
    } else {
      var when = STATUS.inDays === 1 ? "tomorrow" : e.label;
      heroText.textContent = "Next: " + when + " " + fmt12c(e.open) + " · " + e.place;
      heroEl.classList.add("is-closed");
      findEl.textContent = "Closed now · next stop " + when + " " + fmt12(e.open) + " — " + e.place;
      findEl.classList.add("is-closed");
    }

    var q = e.lat + "," + e.lng;
    var link = $("#mapsLink");
    link.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
    link.textContent = (STATUS.open ? "Open this stop in Maps" : "Open next stop in Maps");
  }
  function renderSchedule() {
    var body = $("#schedBody");
    var todayDay = new Date().getDay();
    body.innerHTML = ROUTE.map(function (e) {
      var cls = [];
      if (e.day === todayDay) cls.push("is-today");
      if (e.closed) cls.push("is-closed");
      var hours = e.closed ? "Closed" : fmt12c(e.open) + "–" + fmt12c(e.close);
      var stop = e.closed ? "—" : e.place + " · " + e.area;
      return '<tr class="' + cls.join(" ") + '"><td>' + e.label + "</td><td>" + hours + "</td><td>" + stop + "</td></tr>";
    }).join("");
  }

  /* ---------- map ---------- */
  var mapStarted = false;

  function loadLeaflet(cb) {
    if (typeof L !== "undefined") { cb(); return; }
    if (!$('link[href="vendor/leaflet.css"]')) {
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "vendor/leaflet.css";
      document.head.appendChild(css);
    }
    var s = document.createElement("script");
    s.src = "vendor/leaflet.js";
    s.onload = cb;
    s.onerror = cb; /* initMap() renders a text fallback when L is missing */
    document.head.appendChild(s);
  }

  function startMap() {
    if (mapStarted) return;
    mapStarted = true;
    loadLeaflet(initMap);
  }

  /* Defer Leaflet (JS + map tiles) until the visitor heads toward the route
     section — keeps ~150 KB of JS and the tile requests off the initial load. */
  function deferMap() {
    var find = $("#find");
    if (!find || !("IntersectionObserver" in window)) { startMap(); return; }

    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { io.disconnect(); startMap(); }
    }, { rootMargin: "600px 0px" });
    io.observe(find);

    /* Any engagement means they'll likely scroll to the map soon — pre-warm it. */
    ["scroll", "pointerdown", "keydown"].forEach(function (evt) {
      window.addEventListener(evt, startMap, { once: true, passive: true });
    });
    /* Last-resort fallback for a tab left open without interacting. */
    setTimeout(startMap, 10000);
  }

  function initMap() {
    var el = $("#map");
    if (typeof L === "undefined") {
      el.innerHTML = '<p style="padding:1.2rem;font-family:var(--font-mono);font-size:.8rem;color:var(--ash)">' +
        "Map didn’t load — check your connection. " +
        (STATUS.open ? "Open now at " : "Next stop: ") + STATUS.entry.place + ".</p>";
      return;
    }
    var stops = ROUTE.filter(function (e) { return !e.closed && e.lat; });
    var map = L.map(el, { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      subdomains: "abc", maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var pts = [];
    stops.forEach(function (e) {
      var active = e.day === STATUS.entry.day;
      var icon = L.divIcon({
        className: "",
        html: '<div class="pin ' + (active ? "pin--active" : "") + '"></div>',
        iconSize: [26, 34], iconAnchor: [13, 34], popupAnchor: [0, -32]
      });
      var m = L.marker([e.lat, e.lng], { icon: icon, title: e.place }).addTo(map);
      m.bindPopup(
        "<b>" + e.place + "</b>" +
        '<span class="pin-when">' + e.label + " · " + fmt12c(e.open) + "–" + fmt12c(e.close) + "</span>" +
        '<span class="pin-when">' + e.area + "</span>"
      );
      if (active) m.openPopup();
      pts.push([e.lat, e.lng]);
    });

    map.fitBounds(pts, { padding: [40, 40], animate: !reduceMotion });
    map.on("click", function () { map.scrollWheelZoom.enable(); });
    map.on("mouseout", function () { map.scrollWheelZoom.disable(); });
    setTimeout(function () { map.invalidateSize(); }, 250);
    window.addEventListener("resize", function () { map.invalidateSize(); });
  }

  /* ---------- motion: marquee, reveals, topbar ---------- */
  function initMarquee() {
    var track = $("#marqueeTrack");
    if (track) track.innerHTML += track.innerHTML;
  }
  function initReveals() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(function (e) { e.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  function markReveals() {
    $$(".section .chit, .section__title, .story__body, .order__grid, .find__grid, .catering__inner, .footer__cols")
      .forEach(function (e) { e.classList.add("reveal"); });
  }
  function initTopbar() {
    var bar = $("#topbar");
    bar.hidden = false;
    var ticking = false;
    function update() {
      var show = window.scrollY > window.innerHeight * 0.72;
      bar.classList.toggle("is-visible", show);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.hidden = false;
    void el.offsetWidth;
    el.classList.add("is-up");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("is-up");
      setTimeout(function () { el.hidden = true; }, 260);
    }, 1800);
  }

  /* ---------- delegated clicks ---------- */
  function onClick(ev) {
    var t = ev.target.closest("button");
    if (!t) return;
    if (t.hasAttribute("data-add")) setQty(t.getAttribute("data-add"), 1);
    else if (t.hasAttribute("data-inc")) setQty(t.getAttribute("data-inc"), 1);
    else if (t.hasAttribute("data-dec")) setQty(t.getAttribute("data-dec"), -1);
  }

  /* ---------- catering form ---------- */
  function initCatering() {
    var form = $("#cateringForm");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var email = $("#cateringEmail");
      if (!email.value || email.value.indexOf("@") < 1) { email.focus(); return; }
      $("#cateringOk").hidden = false;
      form.querySelector("button[type=submit]").disabled = true;
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    renderMenu();
    markReveals();
    renderTicket();
    fillPickup();
    renderStatusLines();
    renderSchedule();
    initMarquee();
    initReveals();
    initTopbar();
    initCatering();
    deferMap();

    document.addEventListener("click", onClick);
    $("#pickupForm").addEventListener("submit", handleSubmit);
    $("#newOrderBtn").addEventListener("click", newOrder);
    $("#year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
