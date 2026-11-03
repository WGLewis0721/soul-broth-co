(function(){"use strict";
const variants=[
{key:"midnight-drop",label:"01 · Midnight Drop",eyebrow:"SOUTHERN COMFORT, AFTER DARK",title:'The plate <em>is the event.</em>',intro:"Southern comfort worth showing up for. Monthly plate releases and pop-up pickup days, announced when they're ready."},
{key:"sunday-editorial",label:"02 · Sunday Editorial",eyebrow:"A SUNDAY KIND OF FEELING",title:'Made to be <em>remembered.</em>',intro:"Your favorite comfort food has a new ritual. Thoughtfully made plates. Good company. A reason to mark your calendar."},
{key:"order-ticket",label:"03 · The Order Ticket",eyebrow:"YOUR NEXT GOOD MEAL",title:'Good food. <em>No guesswork.</em>',intro:"The plate. The pickup. The plan. Follow this month's release for menu and event instructions before you make the trip."},
{key:"golden-hour",label:"04 · Golden Hour",eyebrow:"BIG SOUTHERN COMFORT",title:'COME <em>HUNGRY.</em>',intro:"Generous plates. Bold flavor. Monthly pop-up releases that turn an ordinary meal into something worth talking about."},
{key:"the-popup",label:"05 · The Pop-Up",eyebrow:"FOLLOW THE NEXT RELEASE",title:'Find your next <em>plate drop.</em>',intro:"One event at a time. Menu, location, pickup window and ordering announcements live where our community gathers."},
{key:"supper-table",label:"06 · Supper Table",eyebrow:"FROM OUR KITCHEN TO YOUR TABLE",title:'Good food. <em>Worth the wait.</em>',intro:"A little homemade feeling, a lot of flavor. Follow along for the next Haus of Micah supper-style plate release."},
{key:"feed-to-fork",label:"07 · Feed to Fork",eyebrow:"YOU'VE SEEN THE PLATES",title:'You saw it. <em>Now taste it.</em>',intro:"The food you've been watching. The flavors you've been imagining. Follow Haus of Micah for the next monthly release."}
];
const params=new URLSearchParams(location.search), n=Math.min(7,Math.max(1,parseInt(params.get("hero")||"1",10)||1)),variant=variants[n-1],wire=params.get("wire")==="1",review=params.get("review")==="1";
document.body.className="theme-"+n+(wire?" wireframe":"");
const title=document.getElementById("hero-title"), intro=document.getElementById("hero-intro"), eyebrow=document.getElementById("eyebrow-text");
if(title){title.innerHTML=variant.title;intro.textContent=variant.intro;eyebrow.textContent=variant.eyebrow}
const ribbon=document.getElementById("review-ribbon");
if(review&&ribbon){ribbon.hidden=false;const select=document.getElementById("concept-select");variants.forEach((v,i)=>{let o=document.createElement("option");o.value=String(i+1);o.textContent=v.label;select.append(o)});select.value=String(n);select.addEventListener("change",()=>location.href="?hero="+encodeURIComponent(select.value)+"&review=1"+(wire?"&wire=1":""));const w=document.getElementById("wire-link");w.href="?hero="+n+"&review=1"+(wire?"":"&wire=1");w.textContent=wire?"Full design":"Wireframe";}
const dialog=document.getElementById("how-dialog"),how=document.getElementById("how-button");if(dialog&&how){how.addEventListener("click",()=>{if(dialog.showModal)dialog.showModal();else dialog.setAttribute("open","")});dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()})}
})();