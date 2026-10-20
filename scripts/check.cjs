const fs=require('node:fs');const {execFileSync}=require('node:child_process');
for(const f of ['dist/index.html','dist/styles.css','dist/app.js','dist/assets/invitation.png'])if(!fs.existsSync(f))throw new Error('Missing '+f);
execFileSync(process.execPath,['--check','dist/app.js'],{stdio:'inherit'});
const html=fs.readFileSync('dist/index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);if(new Set(ids).size!==ids.length)throw new Error('Duplicate HTML IDs');
const js=fs.readFileSync('dist/app.js','utf8');for(const m of js.matchAll(/\$\('([^']+)'\)/g))if(!ids.includes(m[1]))throw new Error('Missing DOM element '+m[1]);
console.log('Static site checked: JavaScript syntax, assets and DOM references. No build dependencies required.');
