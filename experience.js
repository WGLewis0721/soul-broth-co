/* Haus of Micah: five cinema-grade culinary art directions, one accessible scroll engine.
   The UI never invents an event, price, seat, payment or check-in. */
(function(){
"use strict";
const MEDIA={
 wings:"https://d2ol7oe51mr4n9.cloudfront.net/user_3IkKBBXHZvEZQt2d8pBaRYd083T/2c9bc319-037b-4598-9d9b-da15168138a1.webp",
 comfort:"https://d2ol7oe51mr4n9.cloudfront.net/user_3IkKBBXHZvEZQt2d8pBaRYd083T/87bd4784-9793-4e8b-9a29-5c9637cbb515.webp",
 braised:"https://d2ol7oe51mr4n9.cloudfront.net/user_3IkKBBXHZvEZQt2d8pBaRYd083T/9becac07-289b-49ef-927a-2debd3fa4bc1.webp",
 mac:"https://d2ol7oe51mr4n9.cloudfront.net/user_3IkKBBXHZvEZQt2d8pBaRYd083T/fbb746ca-8724-41e7-90b4-4e42f5e3cfc0.webp"
};
const concepts=[
 {name:"Southern Chiaroscuro",eyebrow:"SOUTHERN GOLD / EST. IN FLAVOR",title:"The plate <em>is the event.</em>",description:"A plate that makes you stop scrolling. A monthly drop worth showing up for.",photos:["wings","mac","braised"],accent:"#DCA63D",bg:"#20120e",fg:"#F3E8D5"},
 {name:"Golden Seal",eyebrow:"A MOMENT OF SOUTHERN GOLD",title:"The art of <em>the good plate.</em>",description:"The most memorable things are rarely rushed. Each drop is its own little occasion.",photos:["braised","comfort","mac"],accent:"#A94929",bg:"#efe2c8",fg:"#261913"},
 {name:"Sunday Chronicle",eyebrow:"A LOVE LETTER TO COMFORT FOOD",title:"Good food. <em>Good stories.</em>",description:"Sunday energy, any day the plate drops. Southern cooking as a story worth sharing.",photos:["mac","wings","braised"],accent:"#A94929",bg:"#efe9df",fg:"#261913"},
 {name:"After Hours",eyebrow:"WHEN THE CRAVING HITS",title:"COME <em>HUNGRY.</em>",description:"Big portions. Bigger anticipation. Follow the next release. This is how the evening gets interesting.",photos:["comfort","wings","braised"],accent:"#E6B04D",bg:"#170f0e",fg:"#FFF7DF"},
 {name:"The Handoff",eyebrow:"ONE PLATE / ONE POP-UP / ONE MOMENT",title:"Made to be <em>picked up.</em>",description:"The drop sets the plan. The food brings everyone together. A monthly ritual, one collection at a time.",photos:["braised","mac","comfort"],accent:"#E4B45E",bg:"#243026",fg:"#F3E8D5"}
];
const chapters=["THE ARRIVAL","THE CRAVING","THE CRAFT","THE HANDOFF","YOUR INVITATION"];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const num=s=>{const n=Number(s);return Number.isInteger(n)&&n>=1&&n<=5?n:1;};
const qs=new URLSearchParams(location.search);let concept=num(qs.get("concept")||"1");
const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isPay=document.body.classList.contains("pay-page");
function paramsFor(path){return path+"?concept="+concept}
function applyTheme(n){
 concept=num(n);document.body.dataset.concept=String(concept);const c=concepts[concept-1];
 if(!isPay){
  const title=$("#experience-title"),desc=$("#hero-description"),brow=$("#hero-eyebrow");
  if(title){title.innerHTML=c.title;desc.textContent=c.description;brow.textContent=c.eyebrow;}
  const im=[ $("#main-photo"),$("#detail-photo"),$("#third-photo") ];
  im.forEach((el,i)=>{if(el)el.src=MEDIA[c.photos[i]]});
  $(".concept-indicator").textContent=String(concept).padStart(2,"0")+" / 05";
  $$("[data-pick]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.pick)===concept)));
  const p=$("#pay-route");if(p)p.href=paramsFor("pay.html");
  const h=$("#head-card");if(h)h.href=paramsFor("pay.html");
 }
 document.title=(isPay?"Sample Pickup Card":"Haus of Micah · "+c.name)+" | The Plate Is the Event";
 const u=new URL(location.href);u.searchParams.set("concept",String(concept));history.replaceState({concept},'',u.pathname+u.search+u.hash);
}
function initExperience(){
 const root=$("#experience"),stage=$("#stage"),panels=$$("[data-beat-panel]"),progress=$("#progress-fill");
 if(!root||!stage)return;
 let idx=0,raf=0;
 const travel=()=>Math.max(1,root.offsetHeight-stage.offsetHeight);
 const sceneProgress=()=>{
  const top=root.getBoundingClientRect().top;
  const sticky=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navh"))||88;
  return Math.max(0,Math.min(1,(sticky-top)/travel()));
 };
 function paint(){
  raf=0;
  if(reduce){
   panels.forEach(p=>p.setAttribute("aria-hidden","false"));
   if(progress)progress.style.width="100%";
   return;
  }
  const p=sceneProgress(),next=Math.max(0,Math.min(4,Math.floor(p*5)));
  stage.style.setProperty("--scene-progress",String(p.toFixed(3)));
  stage.style.setProperty("--drift",(p*16).toFixed(1)+"px");
  if(progress)progress.style.width=(p*100).toFixed(1)+"%";
  if(next!==idx||!stage.dataset.initialized){
   idx=next;stage.dataset.initialized="true";document.body.dataset.beat=String(next);
   panels.forEach((el,n)=>{el.classList.toggle("is-current",n===next);el.setAttribute("aria-hidden",String(n!==next));});
   $("#chapter-counter").innerHTML=String(next+1).padStart(2,"0")+' <span>/ 05</span>';
   $("#chapter-title").textContent=chapters[next];
  }
 }
 const request=()=>{if(!raf)raf=requestAnimationFrame(paint)};
 function jumpTo(n){
  const i=Math.max(0,Math.min(4,n)),sticky=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navh"))||88;
  if(reduce){panels[i].scrollIntoView({behavior:"instant",block:"center"});return;}
  const goal=root.getBoundingClientRect().top+window.scrollY-sticky+(travel()*(i/4));
  window.scrollTo({top:goal,behavior:"smooth"});
 }
 window.addEventListener("scroll",request,{passive:true});window.addEventListener("resize",request);
 $$("[data-jump]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();jumpTo(Number(a.dataset.jump))}));
 const next=$("[data-next]"),prev=$("[data-previous]");
 if(next)next.addEventListener("click",()=>jumpTo(idx+1));
 if(prev)prev.addEventListener("click",()=>jumpTo(idx-1));
 paint();
 const toggle=$("#concept-toggle"),drawer=$("#concept-drawer"),close=$("#concept-close"),scrim=$("#drawer-scrim");
 let oldFocus=null;
 function closeDrawer(){
  drawer.classList.remove("open");drawer.inert=true;scrim.hidden=true;toggle.setAttribute("aria-expanded","false");
  if(oldFocus&&oldFocus.focus)oldFocus.focus();
 }
 function openDrawer(){
  oldFocus=document.activeElement;drawer.inert=false;drawer.classList.add("open");scrim.hidden=false;toggle.setAttribute("aria-expanded","true");close.focus();
 }
 toggle.addEventListener("click",()=>drawer.classList.contains("open")?closeDrawer():openDrawer());
 close.addEventListener("click",closeDrawer);scrim.addEventListener("click",closeDrawer);
 $$("[data-pick]").forEach(b=>b.addEventListener("click",()=>{applyTheme(b.dataset.pick);closeDrawer();request()}));
 document.addEventListener("keydown",e=>{
  if(!drawer.classList.contains("open"))return;
  if(e.key==="Escape"){e.preventDefault();closeDrawer();return;}
  if(e.key==="Tab"){
   const all=$$("button,a,[tabindex='0']",drawer).filter(x=>!x.disabled);
   const first=all[0],last=all[all.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
 });
 applyTheme(concept);
 const navPop=new URLSearchParams(location.search).get("chapter");
 if(navPop&&Number.isInteger(Number(navPop)))requestAnimationFrame(()=>jumpTo(Number(navPop)));
}
function initPay(){
 applyTheme(concept);
 const form=$("#card-form"),holder=$("#pass-name"),input=$("#guest-name"),err=$("#form-error"),download=$("#download-card"),notice=$("#download-note");
 let name="YOUR NAME";
 if(!form)return;
 form.addEventListener("submit",e=>{
  e.preventDefault();const val=input.value.trim().replace(/\s+/g," ");
  if(!val||val.length>45){err.textContent="Add a name (up to 45 characters) to preview the card.";input.focus();return;}
  name=val;holder.textContent=name;err.textContent="";notice.textContent="Sample card ready. No payment or order was created.";
 });
 async function cardBitmap(){
  const c=concepts[concept-1],canvas=document.createElement("canvas"),W=1080,H=1690;
  canvas.width=W;canvas.height=H;const ctx=canvas.getContext("2d");
  const bg=c.bg,fg=c.fg,acc=c.accent;
  ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  const upper=ctx.createLinearGradient(0,0,W,650);upper.addColorStop(0,"#190f0c");upper.addColorStop(.6,"#9c4a25");upper.addColorStop(1,"#261913");
  ctx.fillStyle=upper;ctx.fillRect(0,0,W,700);
  // If CDN allows CORS, incorporate the actual client food in the brand art. Otherwise use the designed fallback.
  const photo=new Image();photo.crossOrigin="anonymous";let photoUsed=false;
  try{
   await new Promise((resolve,reject)=>{photo.onload=resolve;photo.onerror=reject;photo.src=MEDIA[c.photos[0]];setTimeout(()=>reject(Error("image timeout")),4500)});
   if(photo.naturalWidth>0){
    const size=Math.max(W/photo.naturalWidth,700/photo.naturalHeight);
    ctx.drawImage(photo,(W-photo.naturalWidth*size)/2,(700-photo.naturalHeight*size)/2,photo.naturalWidth*size,photo.naturalHeight*size);photoUsed=true;
   }
  }catch(e){}
  let g=ctx.createLinearGradient(0,0,0,700);g.addColorStop(0,"rgba(10,7,5,.45)");g.addColorStop(.5,"rgba(10,7,5,.13)");g.addColorStop(1,bg);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,700);
  function drawText(s,x,y,size,color,font='serif',weight=400){ctx.fillStyle=color;ctx.font=weight+" "+size+"px "+font;ctx.fillText(s,x,y)}
  function line(y){ctx.strokeStyle=acc;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(67,y);ctx.lineTo(W-67,y);ctx.stroke()}
  ctx.textBaseline="alphabetic";
  drawText("HAUS OF MICAH",66,85,28,"#F3E8D5",'Arial',700);
  drawText("THE PLATE IS THE EVENT",66,124,17,"#F3E8D5",'Arial',700);
  drawText("THE HAUS",65,525,125,"#FFF3DE",'Georgia');
  drawText("PASS.",67,655,164,"#DCA63D",'Georgia');
  drawText("CREATIVE PREVIEW · NOT A VALID ORDER",67,763,21,acc,'Arial',700);line(802);
  drawText("PREVIEW HOLDER",66,862,19,acc,'Arial',700);
  let written=name.toUpperCase();let fontSize=Math.min(71,1000/Math.max(1,written.length)*1.55);
  drawText(written.slice(0,45),66,950,fontSize,fg,'Georgia');
  line(1004);
  drawText("NEXT DROP",66,1064,18,acc,'Arial',700);
  drawText("TO BE ANNOUNCED",66,1119,34,fg,'Arial',700);
  drawText("PICKUP LOCATION",66,1198,18,acc,'Arial',700);
  drawText("ANNOUNCED FOR EACH EVENT",66,1253,29,fg,'Arial',700);
  drawText("REGION",66,1327,18,acc,'Arial',700);
  drawText("NORTH ALABAMA",66,1382,31,fg,'Arial',700);
  line(1447);
  ctx.globalAlpha=.93;drawText("SAMPLE",65,1570,120,acc,'Georgia');ctx.globalAlpha=1;
  drawText("NOT PAID • NO QR • NO RESERVATION",68,1638,19,fg,'Arial',700);
  try{return canvas.toDataURL("image/png")}catch(e){
   if(photoUsed){ctx.clearRect(0,0,W,700);ctx.fillStyle=upper;ctx.fillRect(0,0,W,700);drawText("THE HAUS",65,525,125,"#FFF3DE",'Georgia');drawText("PASS.",67,655,164,"#DCA63D",'Georgia');drawText("HAUS OF MICAH",66,85,28,"#F3E8D5",'Arial',700);return canvas.toDataURL("image/png");}
   throw e;
  }
 }
 download.addEventListener("click",async()=>{
  download.disabled=true;notice.textContent="Preparing your sample card…";
  try{const url=await cardBitmap(),a=document.createElement("a");a.href=url;a.download="haus-of-micah-sample-pass.png";document.body.append(a);a.click();a.remove();notice.textContent="Sample PNG created. It is not proof of payment or a pickup reservation."}
  catch(e){notice.textContent="The download could not be generated in this browser. You can screenshot the sample card above."}
  finally{download.disabled=false}
 });
}
if(isPay)initPay();else if($("#experience"))initExperience();
})();
