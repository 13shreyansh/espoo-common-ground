import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve(process.argv.includes('--dist')?'dist':'.');
const types={'.html':'text/html','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.md':'text/plain','.txt':'text/plain','.woff2':'font/woff2'};
createServer(async(req,res)=>{
  try {
    const url=new URL(req.url,'http://localhost');
    const path=resolve(root, '.'+decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if(!path.startsWith(root+'/')) throw Error('path');
    const content=await readFile(path);
    res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(content);
  } catch {res.writeHead(404);res.end('Not found');}
}).listen(4173,'127.0.0.1',()=>console.log('Common Ground: http://127.0.0.1:4173'));
