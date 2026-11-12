#!/usr/bin/env node
// Pure Node.js source smoke test. Run after every presentation edit.
// Does not replace visual Safari/Chrome screenshot testing.
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const source=(p)=>readFileSync(resolve(root,p),'utf8');
const html=source('index.html');
const css=source('v4/presentation.css');
const js=source('v4/presentation.js');
const sprite=source('assets/v2/ui/icons.svg');
const failures=[];
function check(ok,message){if(!ok)failures.push(message)}
check(html.includes('class="v4-hero"'),'V4 hero missing');
check(html.includes('class="v4-plate-image"'),'Visible hero img missing');
check(html.includes('id="v2-request-form"'),'Working request form missing');
check(html.includes('EXAMPLE REQUEST · DEMO ONLY'),'No real-order disclaimer');
check(html.includes('href="v4/presentation.css"')&&html.includes('src="v4/presentation.js"'),'Presentation assets missing');
check(!html.includes('data-v3-orbit'),'Old frame-derived hero controller still attached');
check(css.includes('@media(max-width:860px)')&&css.includes('@media(max-width:600px)'),'Tablet/phone sizing rules missing');
check(css.includes('prefers-reduced-motion:reduce'),'Reduced-motion fallback missing');
check(js.includes('addEventListener(\'error\''),'Image fallback missing');
check(!/[♡✳🍛🍗🥘💛]/u.test(html),'Decorative emoji in homepage');
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
check(new Set(ids).size===ids.length,'Duplicate HTML ids');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))check(ids.includes(id),'Broken anchor: '+id);
for(const [,url] of html.matchAll(/\b(?:src|href)="([^"]+)"/g)){
 if(/^(?:https?:|tel:|sms:|mailto:|#|data:)/.test(url))continue;
 check(existsSync(resolve(root,url.split('#')[0])),'Missing local asset: '+url);
}
for(const [,id] of html.matchAll(/icons\.svg#([^"']+)/g))check(sprite.includes('id="'+id+'"'),'Missing icon: '+id);
for(const [,tag] of html.matchAll(/(<img\b[^>]*>)/g))check(/\balt="/.test(tag),'Image lacks alt: '+tag.slice(0,100));
for(const [name,value] of [['CSS',css],['JavaScript',js]]){
 let open=0;
 for(const c of value){if(c==='{')open++;else if(c==='}')open--}
 check(open===0,name+' braces are not balanced');
}
// The Haus Table V5: structural and motion/safe-data source contracts.
const v5css=source('v5/food-gallery.css');
const v5js=source('v5/food-gallery.js');
check(!html.includes('<section class="v3-cinema"'),'Old separate food film still present');
check((html.match(/id="gallery"/g)||[]).length===1,'Section 04 duplicated');
check(html.includes('04 / THE KITCHEN'),'Renumbered Section 04 missing');
check(html.includes('02 / HOW IT WORKS')&&html.includes('03 / ORDER REQUEST')&&html.includes('05 / PICKUP'),'Section numbering shifted incorrectly');
check((html.match(/class="v5-food-item"/g)||[]).length===3,'Expected three original photo buttons');
check(v5css.includes('translate3d(-50%,0,0)')&&v5css.includes('translate3d(0,0,0)'),'Left-to-right loop missing');
check(v5css.includes('.v5-kitchen.is-image-hover')&&v5js.includes('is-image-hover')&&!v5css.includes('.v5-kitchen:focus-within'),'Image-only hover pause missing');
check(v5css.includes('calc(var(--v5-thumb-width) * 1.25)'),'125 percent expansion missing');
check(v5css.includes('prefers-reduced-motion:reduce')&&v5js.includes('saveData'),'Motion/data saver fallback missing');
check(v5js.includes('data-v5-copy')&&v5js.includes('if(b){select(b);return}'),'Repeated images are not tappable');
check(v5js.includes('close.focus')&&v5js.includes('selected.focus'),'Focus management missing');
for(const [name,value] of [['V5 CSS',v5css],['V5 JavaScript',v5js]]){let depth=0;for(const c of value){if(c==='{')depth++;if(c==='}')depth--}check(depth===0,name+' brace mismatch')}
if(failures.length){for(const err of failures)console.error('FAIL '+err);process.exit(1)}
console.log('PASS: presentation source, anchors, assets, icons, demo safeguards, responsive and reduced-motion contracts');
