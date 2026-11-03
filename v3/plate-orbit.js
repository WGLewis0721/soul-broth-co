/* Haus of Micah · photographic plate orbit (no slideshow frames). */
(()=>{'use strict';
 const shell=document.querySelector('[data-v3-orbit]');
 if(!shell)return;
 const stage=shell.querySelector('.v3-orbit-stage');
 const button=shell.querySelector('[data-motion-toggle]');
 if(!stage||!button)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const saveData=Boolean(navigator.connection&&navigator.connection.saveData);
 let pausedByUser=false,away=false;
 function sync(){
   const allowed=!reduced.matches&&!saveData;
   stage.classList.toggle('is-orbit-enabled',allowed);
   stage.classList.toggle('is-orbit-paused',allowed&&(pausedByUser||away||document.hidden));
   button.hidden=!allowed;
   button.disabled=!allowed;
   button.setAttribute('aria-pressed',String(pausedByUser));
   button.textContent=pausedByUser?'Resume motion':'Pause motion';
   button.setAttribute('aria-label',pausedByUser?'Resume rotating plate':'Pause rotating plate');
 }
 button.addEventListener('click',()=>{pausedByUser=!pausedByUser;sync()});
 if('IntersectionObserver' in window){
   const observer=new IntersectionObserver(entries=>{
     for(const entry of entries){away=!entry.isIntersecting;sync()}
   },{threshold:0});
   observer.observe(shell);
 }
 document.addEventListener('visibilitychange',sync);
 if(typeof reduced.addEventListener==='function')reduced.addEventListener('change',sync);
 sync();
})();
