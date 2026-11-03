/* Progressive enhancement: one real still first, five subtle photographic views only
 * after full decoding. Motion never blocks ordering, consent, or paint. */
(()=>{'use strict';
 const shell=document.querySelector('[data-plate-turntable]');
 if(!shell)return;
 const poster=shell.querySelector('.plate-poster');
 const stack=shell.querySelector('.plate-angle-stack');
 const button=document.getElementById('plate-motion-toggle');
 const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const saveData=Boolean(navigator.connection&&navigator.connection.saveData);
 const config=window.HAUS_MONTHLY_PLATE||{};
 const sources=config.turntableViews;
 if(poster&&typeof config.image==='string'){poster.src=config.image;poster.alt='';}
 let generation=0,paused=false;
 function disable(){generation++;shell.dataset.ready='false';shell.classList.remove('is-paused');if(stack)stack.replaceChildren();if(button){button.hidden=true;button.setAttribute('aria-pressed','false');}}
 async function begin(){
  if(prefersReduced.matches||saveData||!stack||!Array.isArray(sources)||sources.length!==5){disable();return;}
  const task=++generation;
  try{
   const frames=await Promise.all(sources.map((url,index)=>new Promise((resolve,reject)=>{
    if(typeof url!=='string'||!url.startsWith('assets/')){reject(new Error('Invalid local plate view'));return;}
    const img=new Image();img.alt='';img.draggable=false;img.decoding='async';img.width=960;img.height=960;
    img.className='plate-view plate-view-'+index;img.setAttribute('aria-hidden','true');
    img.onload=()=>resolve(img);img.onerror=()=>reject(new Error('Plate image unavailable'));
    img.src=url;
   })));
   if(task!==generation||prefersReduced.matches)return;
   stack.replaceChildren(...frames);shell.dataset.ready='true';
   if(button){button.hidden=false;button.disabled=false;}
  }catch{if(task===generation)disable();}
 }
 if(button){button.addEventListener('click',()=>{
  if(shell.dataset.ready!=='true')return;
  paused=!paused;shell.classList.toggle('is-paused',paused);
  button.setAttribute('aria-pressed',String(paused));
  button.setAttribute('aria-label',paused?'Resume plate animation':'Pause plate animation');
  const text=button.querySelector('.motion-label');if(text)text.textContent=paused?'Resume motion':'Pause motion';
 });}
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries)shell.classList.toggle('is-away',!entry.isIntersecting);
  },{threshold:0});observer.observe(shell);
 }
 document.addEventListener('visibilitychange',()=>shell.classList.toggle('is-hidden',document.hidden));
 if(typeof prefersReduced.addEventListener==='function')prefersReduced.addEventListener('change',()=>{
  if(prefersReduced.matches)disable();else begin();
 });
 begin();
})();