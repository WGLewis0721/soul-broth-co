/* SOUL BROTH CO. — single source of truth for the menu + weekly route.
   Used by the page (menu render + order cart) and mirrored in menu.pdf. */

window.SBC = window.SBC || {};

/* Tax rate applied at checkout (Atlanta prepared-food rate, mockup value). */
window.SBC.TAX_RATE = 0.089;

/* Dietary tag legend. */
window.SBC.TAGS = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-free",
};

window.SBC.MENU = [
  {
    id: "bowls",
    name: "Bowls",
    note: "Broth built low and slow. Add a soft egg to any bowl for $2.",
    items: [
      {
        id: "oxtail-shoyu",
        name: "Oxtail Shoyu Ramen",
        price: 18,
        desc: "12-hour oxtail broth, soy tare, braised collards, soft egg, charred scallion, house chili crisp.",
        tags: [],
      },
      {
        id: "hot-honey-chashu",
        name: "Hot-Honey Chashu Ramen",
        price: 17,
        desc: "Pork-belly chashu, hot-honey glaze, smoked-tomato broth, pickled okra, crispy shallot.",
        tags: [],
      },
      {
        id: "catfish-katsu",
        name: "Catfish Katsu Bowl",
        price: 16,
        desc: "Cornmeal-panko catfish, steamed rice, napa slaw, comeback aioli, torn nori.",
        tags: [],
      },
      {
        id: "smoked-turkey-tantan",
        name: "Smoked Turkey Tantan",
        price: 16,
        desc: "Sesame-peanut broth, smoked turkey, mustard greens, field peas, scallion.",
        tags: [],
      },
      {
        id: "miso-greens",
        name: "Miso Greens Bowl",
        price: 14,
        desc: "White-miso pot likker, triple greens, roasted sweet potato, seared tofu, benne seed.",
        tags: ["VG", "GF"],
      },
      {
        id: "gochujang-chicken-rice",
        name: "Gochujang Fried Chicken Rice",
        price: 15,
        desc: "Sweet-tea-brined thigh, gochujang-sorghum glaze, jasmine rice, quick cucumber pickle.",
        tags: [],
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Soul",
    note: null,
    items: [
      {
        id: "collard-gyoza",
        name: "Collard Gyoza (6)",
        price: 9,
        desc: "Pan-fried, smoked-collard and pork filling, sorghum-soy dip.",
        tags: [],
      },
      {
        id: "cornbread-buns",
        name: "Cornbread Buns (2)",
        price: 6,
        desc: "Steamed bao-style cornbread, whipped honey butter.",
        tags: ["V"],
      },
      {
        id: "mac-miso",
        name: "Mac & Miso",
        price: 7,
        desc: "Baked macaroni, miso-cheddar mornay, cracker-crumb crust.",
        tags: ["V"],
      },
      {
        id: "chili-crisp-okra",
        name: "Chili-Crisp Okra",
        price: 6,
        desc: "Flash-fried okra, house chili crisp, lime.",
        tags: ["VG", "GF"],
      },
      {
        id: "field-pea-salad",
        name: "Field Pea Salad",
        price: 5,
        desc: "Black-eyed peas, sesame vinaigrette, torn herbs.",
        tags: ["VG", "GF"],
      },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    note: null,
    items: [
      {
        id: "sweet-potato-mochi-pie",
        name: "Sweet Potato Mochi Pie",
        price: 7,
        desc: "Chewy mochi crust, sweet-potato custard, torched marshmallow.",
        tags: ["V"],
      },
      {
        id: "benne-cookie",
        name: "Benne Sesame Cookie",
        price: 3,
        desc: "Brown-butter, toasted benne seed, flaky salt.",
        tags: ["V"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    note: null,
    items: [
      { id: "half-and-half", name: "Half & Half", price: 4, desc: "Sweet tea cut with fresh lemonade.", tags: ["VG", "GF"] },
      { id: "yuzu-hibiscus", name: "Yuzu Hibiscus Cooler", price: 4, desc: "Tart, floral, barely sweet.", tags: ["VG", "GF"] },
      { id: "ramune", name: "Ramune", price: 4, desc: "The marble-top soda. Ask for today's flavor.", tags: ["VG", "GF"] },
      { id: "chicory-cold-brew", name: "Chicory Cold Brew", price: 4, desc: "New Orleans-style, over ice.", tags: ["VG", "GF"] },
    ],
  },
];

/* Weekly route. hours are 24h decimal (11.5 = 11:30). day: 0 = Sunday .. 6 = Saturday.
   Coordinates are real Atlanta locations so the map reads true. */
window.SBC.ROUTE = [
  { day: 1, label: "Monday", closed: true },
  { day: 2, label: "Tuesday", open: 11, close: 15, place: "Ponce City Market", area: "Old Fourth Ward", lat: 33.7726, lng: -84.3654 },
  { day: 3, label: "Wednesday", open: 11, close: 15, place: "Tech Square", area: "Midtown", lat: 33.7768, lng: -84.3892 },
  { day: 4, label: "Thursday", open: 17, close: 21, place: "Krog Street Market", area: "Beltline Eastside", lat: 33.7539, lng: -84.3637 },
  { day: 5, label: "Friday", open: 11, close: 15, place: "Woodruff Park", area: "Downtown", lat: 33.7550, lng: -84.3877 },
  { day: 6, label: "Saturday", open: 12, close: 20, place: "Grant Park Market", area: "Grant Park", lat: 33.7395, lng: -84.3702 },
  { day: 0, label: "Sunday", open: 12, close: 17, place: "The Works ATL", area: "Upper Westside", lat: 33.7930, lng: -84.4130 },
];
