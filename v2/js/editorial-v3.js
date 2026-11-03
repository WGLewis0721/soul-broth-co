/* Passive editorial effects only. Never reads, stores, or sends order details. */
(()=>{'use strict';const header=document.querySelector('.v2-header');
if(header){const line=document.createElement('div');line.className='read-progress';line.setAttribute('aria-hidden','true');header.append(line)}
let ticking=false;function update(){const y=scrollY||0,total=Math.max(1,document.documentElement.scrollHeight-innerHeight);document.documentElement.style.setProperty('--read-progress',Math.min(100,Math.max(0,y/total*100))+'%');header?.classList.toggle('is-scrolled',y>40);ticking=false}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});update();
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const els=document.querySelectorAll('.drop-heading,.drop-details,.section-topline,.request-intro,.gallery-grid figure,.pickup-steps,.faq-items,.join-layout');
const observer=new IntersectionObserver(items=>{for(const item of items)if(item.isIntersecting){item.target.classList.add('entered');observer.unobserve(item.target)}},{threshold:.07,rootMargin:'0px 0px -35px 0px'});
for(const el of els){el.classList.add('scroll-reveal');observer.observe(el)}})();