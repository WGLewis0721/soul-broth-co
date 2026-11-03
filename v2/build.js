/** Haus of Micah V2 — source fragments → static pages.
 * Run from the repo root: node v2/build.js
 * The legacy public homepage remains unchanged; generates only /v2/ preview files.
 */
const fs=require('node:fs');const path=require('node:path');
const root=__dirname;
const read=n=>fs.readFileSync(path.join(root,'components',n+'.html'),'utf8');
const sectionNames=['hero','drop','how','form','gallery','pickup','faq','join'];
const demoNames=[['Navigation','nav'],['Hero','hero'],['Current drop','drop'],['How it works','how'],['Request form','form'],['Gallery','gallery'],['Pickup communication','pickup'],['FAQ','faq'],['Next drop','join'],['Request status','status'],['Pickup card','card'],['Buttons and states','buttons'],['SVG icons','icons']];
const layout=(title,body,cls='')=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#261913"><title>${title} | Haus of Micah</title><link rel="icon" href="../assets/brand/haus-icon.svg" type="image/svg+xml"><link rel="stylesheet" href="./styles.css"><script src="../monthly-menu.js" defer></script><script src="./app.js" defer></script></head><body class="${cls}"><a class="skip-link" href="#main-content">Skip to content</a>${body}</body></html>`;
const page=read('nav')+'<main id="main-content">'+sectionNames.map(read).join('\n')+'</main><footer class="v2-footer"><div class="v2-shell"><span>HAUS OF MICAH · WEBSITE V2 CONCEPT</span><a href="components.html">Component library ↗</a><a href="../">Existing live website ↗</a></div></footer>';
fs.writeFileSync(path.join(root,'index.html'),layout('Website V2 Preview',page));
const fragments=demoNames.map(([title,name],i)=>{
 let part=read(name);if(name==='hero')part=part.replace('<h1 id="hero-title">','<h2 id="hero-title">').replace('</h1>','</h2>');
 return `<section class="library-entry" id="component-${name}" aria-label="${title} component"><div class="library-label"><span>${String(i+1).padStart(2,'0')} / ${title}</span><code>v2/components/${name}.html</code></div><div class="component-preview">${part}</div></section>`;
});
const lib=`<header class="library-header"><div class="v2-shell"><a href="index.html" class="library-back">← V2 website preview</a><span class="micro gold">V2 · COMPONENT SYSTEM</span><h1>Designed as pieces. <em>Built as one experience.</em></h1><p>Thirteen inspectable, independent components. All form, status and pickup states are demonstrations, not real orders.</p></div></header><main id="main-content" class="component-library"><div class="v2-shell">${fragments.join('\n')}</div></main>`;
fs.writeFileSync(path.join(root,'components.html'),layout('V2 Component Library',lib,'library-body'));
console.log('Compiled '+sectionNames.length+' landing-page modules and '+demoNames.length+' component previews.');
