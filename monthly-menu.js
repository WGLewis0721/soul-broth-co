/* Monthly menu source of truth for visual previews ONLY.
   To change the plate next month, edit this one file: name, includes, image,
   price and pickup windows. A real live shop must use server-verified data. */
window.HAUS_MONTHLY_PLATE=Object.freeze({
 id:"haus-comfort-sample",
 name:"Haus Comfort Plate",
 includes:[
  "Crispy seasoned wings",
  "Macaroni & cheese",
  "Slow-cooked collard greens",
  "Candied yams"
 ],
 image:"assets/plate-angle-center.webp",
 imageAlt:"Illustrative Southern comfort plate with wings, macaroni, collard greens and candied yams",
 turntableViews:[
  "assets/plate-angle-left22.webp",
  "assets/plate-angle-left12.webp",
  "assets/plate-angle-center.webp",
  "assets/plate-angle-right12.webp",
  "assets/plate-angle-right22.webp"
 ],
 samplePrice:28,
 pickupWindows:[
  {value:"12:00–12:30 PM",label:"12:00–12:30"},
  {value:"12:30–1:00 PM",label:"12:30–1:00"},
  {value:"1:00–1:30 PM",label:"1:00–1:30"}
 ]
});
