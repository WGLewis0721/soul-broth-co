/* Haus of Micah: no external data exchange. Order intent lives in sessionStorage until payment is enabled. */
(()=>{'use strict';
const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
const KEY='haus-micah-order-preview-v2',PRICE=28;
const notify=(message)=>{const t=$('#toast');if(!t)return;t.textContent=message;t.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.classList.remove('show'),2800)};
const menu=$('#menu-toggle'), nav=$('#nav');
if(menu&&nav){function close(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
const form=$('#quick-order');
if(form){let quantity=1;
const setQty=q=>{quantity=Math.max(1,Math.min(12,q));$('#quantity').value=quantity;$('#qty-display').textContent=quantity;$('#qty-minus').disabled=quantity===1;$('#qty-plus').disabled=quantity===12;$('#order-total').textContent='$'+(quantity*PRICE).toFixed(2);$('#order-breakdown').textContent=`${quantity} ${quantity===1?'plate':'plates'} × $${PRICE} sample price`};
$('#qty-minus').addEventListener('click',()=>setQty(quantity-1));$('#qty-plus').addEventListener('click',()=>setQty(quantity+1));
function err(id,msg){const input=$('#order-'+id),out=$('#'+id+'-error');input.setAttribute('aria-invalid',String(!!msg));out.textContent=msg}
$$('#order-name,#order-phone').forEach(el=>el.addEventListener('input',()=>err(el.id.slice(6),'')));
form.addEventListener('submit',event=>{
 event.preventDefault();const name=$('#order-name').value.trim().replace(/\s+/g,' '), phone=$('#order-phone').value.trim(),digits=phone.replace(/\D/g,''),email=$('#order-email').value.trim(),note=$('#order-note').value.trim(), pickup=$('input[name="pickup"]:checked')?.value;
 err('name',name.length<2?'Enter your name for pickup.':'');err('phone',digits.length<10||digits.length>15?'Enter a valid phone number.':'');
 if(name.length<2||digits.length<10||digits.length>15){$('#'+(name.length<2?'order-name':'order-phone')).focus();return}
 if(email&&!$('#order-email').checkValidity()){notify('Check the optional email address.');$('#order-email').focus();return}
 const draft={version:2,status:'sample_unpaid',item:{id:'monthly-plate',name:'Haus Comfort Plate',samplePrice:PRICE},quantity,pickupWindow:pickup,name,phone,email,note,createdAt:new Date().toISOString(),eventDate:null,eventLocation:null};
 try{sessionStorage.setItem(KEY,JSON.stringify(draft));window.location.assign('pay.html?source=monthly-drop')}catch{notify('Could not open the preview. Check your browser settings.');}
});}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver'in window){document.body.classList.add('js-motion');const io=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}},{threshold:.02,rootMargin:'0px 0px -8% 0px'});$$('[data-reveal]').forEach(el=>io.observe(el))}
})();