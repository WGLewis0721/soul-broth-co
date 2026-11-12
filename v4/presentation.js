/* Haus of Micah presentation edition: motion is optional; imagery is not. */
(()=>{'use strict';
 const hero=document.querySelector('[data-v4-plate]');
 if(!hero)return;
 const image=hero.querySelector('.v4-plate-image');
 const stage=hero.querySelector('.v4-plate-stage');
 const button=hero.querySelector('[data-v4-motion-toggle]');
 if(!image||!stage||!button)return;
 // Always display a real image, even with scripts disabled or the primary URL unavailable.
 const sources=[image.dataset.fallback,'assets/food/comfort.webp'].filter(Boolean);
 image.addEventListener('error',()=>{
   const next=sources.shift();
   if(next){image.src=next;image.alt='Illustrative plate from the Haus of Micah visual menu collection'}
 });
 // If the first asset failed before deferred JS ran, recover immediately.
 if(image.complete && image.naturalWidth === 0 && sources.length){image.dispatchEvent(new Event('error'))}
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const saveData=Boolean(navigator.connection?.saveData);
 let manuallyPaused=false,offscreen=false;
 const sync=()=>{
   const eligible=!reduce.matches&&!saveData;
   stage.classList.toggle('v4-is-moving',eligible);
   stage.classList.toggle('v4-paused',eligible&&(manuallyPaused||offscreen||document.hidden));
   button.hidden=!eligible;
   button.setAttribute('aria-pressed',String(manuallyPaused));
   button.textContent=manuallyPaused?'Resume motion':'Pause motion';
 };
 button.addEventListener('click',()=>{manuallyPaused=!manuallyPaused;sync()});
 reduce.addEventListener?.('change',sync);
 document.addEventListener('visibilitychange',sync);
 if('IntersectionObserver' in window){
   const observer=new IntersectionObserver(entries=>{
     for(const entry of entries){offscreen=!entry.isIntersecting;sync()}
   },{threshold:0});
   observer.observe(hero);
 }
 sync();
})();