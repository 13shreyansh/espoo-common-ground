import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(await readFile('eval/FINAL_FREEZE.json','utf8'));
for(const [path,expected] of Object.entries(manifest.sha256)){
  const actual=createHash('sha256').update(await readFile(path)).digest('hex');
  if(actual!==expected)throw Error(`Frozen artifact changed: ${path}`);
}
console.log(`Verified ${Object.keys(manifest.sha256).length} frozen audit/review artifacts. This checks bytes, not independent relevance or legal compliance.`);
