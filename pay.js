/* Local customer card mock. Real Stripe checkout and fulfillment webhooks NOT CONNECTED. */
(()=>{'use strict';
 const KEY='haus-micah-order-preview-v2', $=s=>document.querySelector(s);
 let draft;try{draft=JSON.parse(sessionStorage.getItem(KEY)||'null')}catch{};
 if(!draft||draft.version!==2||!Number.isInteger(draft.quantity)||draft.quantity<1||draft.quantity>12)draft={version:2,quantity:1,name:'Guest preview',phone:'',pickupWindow:'12:00–12:30 PM',note:''};
 const name=String(draft.name||'Guest preview').slice(0,80),qty=draft.quantity,slot=String(draft.pickupWindow||'To be announced'), phone=String(draft.phone||'—').slice(0,32);
 $('#bag-quantity').textContent=`${qty} ${qty===1?'plate':'plates'} · sample`;$('#pay-subtotal').textContent='$'+(qty*28).toFixed(2);
 $('#summary-name').textContent=name;$('#summary-phone').textContent=phone;$('#summary-slot').textContent=slot;
 $('#card-name').textContent=name.toUpperCase();$('#card-items').textContent=`${qty} × Haus Comfort Plate`;$('#card-pickup').textContent='EXAMPLE · '+slot;
 if(draft.note){$('#summary-note-row').hidden=false;$('#summary-note').textContent=String(draft.note).slice(0,180)}
 function saveBlob(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
 const btn=$('#export-card');btn.addEventListener('click',async()=>{btn.disabled=true;$('#export-status').textContent='Creating your preview image…';try{
 const W=1000,H=1520,canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');ctx.fillStyle='#261913';ctx.fillRect(0,0,W,H);
 const img=new Image();img.src='assets/hero-plate-clean.webp';await img.decode();const aspect=img.width/img.height;const cropH=400;ctx.drawImage(img,0,(img.height-img.width/2.5)/2,img.width,Math.min(img.height,img.width/2.5),0,0,W,cropH);
 const grad=ctx.createLinearGradient(0,180,0,465);grad.addColorStop(0,'rgba(38,25,19,0)');grad.addColorStop(1,'#261913');ctx.fillStyle=grad;ctx.fillRect(0,180,W,285);
 ctx.fillStyle='#DCA63D';ctx.font='800 24px system-ui';ctx.fillText('HAUS OF MICAH / DESIGN PREVIEW',62,120);
 ctx.fillStyle='#F3E8D5';ctx.font='italic 76px Georgia,serif';ctx.fillText('Your plate is',60,515);ctx.fillStyle='#DCA63D';ctx.fillText('the event.',60,600);
 ctx.strokeStyle='#956a3c';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(60,650);ctx.lineTo(940,650);ctx.stroke();
 const fields=[['CUSTOMER',name.toUpperCase()],['ORDER',`${qty} × HAUS COMFORT PLATE`],['PICKUP WINDOW (EXAMPLE)',slot],['EVENT LOCATION','NORTH ALABAMA · TBA'],['STATUS','UNPAID / DRAFT']];
 let y=724;for(const [label,value] of fields){ctx.fillStyle='#DCA63D';ctx.font='bold 22px system-ui';ctx.fillText(label,62,y);y+=45;ctx.fillStyle='#F3E8D5';ctx.font='600 32px system-ui';ctx.fillText(value.slice(0,43),62,y);y+=105}
 ctx.fillStyle='#472916';ctx.fillRect(40,1350,920,95);ctx.fillStyle='#F5D0A1';ctx.font='bold 23px system-ui';ctx.textAlign='center';ctx.fillText('SAMPLE · NOT PAID · NOT VALID FOR PICKUP',500,1408);ctx.textAlign='left';
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('Could not export');saveBlob(blob,'haus-of-micah-draft-card.png');$('#export-status').textContent='Draft image saved. It does not confirm an order or reservation.';
 }catch(e){$('#export-status').textContent='Could not create the image on this device. You may take a screenshot of the draft card.'}finally{btn.disabled=false}});
})();