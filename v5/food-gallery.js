/* Haus of Micah · continuous left-to-right gallery; accessible click-to-expand.
   The page remains a design demo: descriptions reflect visible photo elements,
   not validated/current product ingredients or a guaranteed menu. */
(()=>{'use strict';
 const root=document.querySelector('[data-v5-gallery]');
 if(!root)return;
 const track=root.querySelector('[data-v5-track]');
 const first=root.querySelector('[data-v5-original-set]');
 const viewport=root.querySelector('[data-v5-viewport]');
 const focus=root.querySelector('[data-v5-focus]');
 const image=focus?.querySelector('[data-v5-focus-image]');
 const heading=focus?.querySelector('[data-v5-focus-name]');
 const list=focus?.querySelector('[data-v5-focus-items]');
 const close=focus?.querySelector('[data-v5-close]');
 if(!track||!first||!viewport||!focus||!image||!heading||!list||!close)return;
 const data={
  wings:{name:'Crispy & glazed',image:'assets/food/wings.webp',
   alt:'Photograph of crispy fried chicken with glazed food and a creamy side',
   items:['Crispy chicken','Sweet glazed accompaniment','Creamy side']},
  braised:{name:'Slow-cooked comfort',image:'assets/food/braised.webp',
   alt:'Photograph of braised meat with collard greens, carrots and potatoes',
   items:['Braised beef','Collard greens','Carrots','Potatoes']},
  mac:{name:'Golden & generous',image:'assets/food/mac-and-glaze.webp',
   alt:'Photograph featuring macaroni and cheese alongside glazed prepared food',
   items:['Macaroni & cheese','Glazed preparation','Savory sides']}
 };
 let currentButton=null;
 let hovered=false,keyboardFocus=false;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const saveData=Boolean(navigator.connection?.saveData);
 const refresh=()=>{
  const moving=!reduced.matches&&!saveData;
  track.classList.toggle('is-running',moving);
  root.classList.toggle('is-paused',Boolean(currentButton));
  if(!moving){const clone=track.querySelector('[data-v5-duplicate]');if(clone)clone.remove()}
  else if(!track.querySelector('[data-v5-duplicate]')){
    const clone=first.cloneNode(true);
    clone.setAttribute('data-v5-duplicate','');
    clone.setAttribute('aria-hidden','true');
    clone.querySelectorAll('button').forEach(btn=>{btn.tabIndex=-1;btn.setAttribute('aria-hidden','true');btn.setAttribute('data-v5-copy','');});
    track.appendChild(clone);
  }
 };
 const select=(button)=>{
  const dish=data[button?.dataset.v5Food];
  if(!dish)return;
  if(currentButton&&currentButton!==button)currentButton.setAttribute('aria-expanded','false');
  currentButton=button;
  button.setAttribute('aria-expanded','true');
  heading.textContent=dish.name;
  image.src=dish.image;
  image.alt=dish.alt;
  list.replaceChildren();
  for(const item of dish.items){const li=document.createElement('li');li.textContent=item;list.appendChild(li)}
  focus.hidden=false;
  root.classList.add('is-paused');
  viewport.classList.add('is-focused');
  track.inert=true;
  close.focus({preventScroll:true});
 };
 const dismiss=()=>{
  const selected=currentButton;
  if(!selected)return;
  currentButton=null;
  focus.hidden=true;
  root.classList.remove('is-paused');
  viewport.classList.remove('is-focused');
  track.inert=false;
  selected.setAttribute('aria-expanded','false');
  if(selected.isConnected)selected.focus({preventScroll:true});
 };
 root.addEventListener('click',e=>{
   const b=e.target.closest('[data-v5-food]');
   if(b&&!b.hasAttribute('data-v5-copy')){select(b);return}
   if(e.target.closest('[data-v5-close]'))dismiss();
 });
 root.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'||e.pointerType==='pen')hovered=true});
 root.addEventListener('pointerleave',()=>{hovered=false});
 root.addEventListener('focusin',()=>{keyboardFocus=true});
 root.addEventListener('focusout',e=>{if(!root.contains(e.relatedTarget))keyboardFocus=false});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&currentButton){e.preventDefault();dismiss()}});
 reduced.addEventListener?.('change',refresh);
 refresh();
})();
