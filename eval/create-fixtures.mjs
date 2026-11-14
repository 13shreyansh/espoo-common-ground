// Fixture construction is transparent. This file does not call the scheduling policy.
// Do not regenerate the frozen audit to improve a score.
import {writeFile,access} from 'node:fs/promises';
try {await access('eval/fixtures.json');throw Error('Frozen fixtures already exist; refusing overwrite.');}catch(e){if(e.code!=='ENOENT')throw e;}
const scenarios=[];
for(const family of ['transfer','vocabulary','scarcity','availability','opt-in','incomplete','cancellation']) {
  for(let variant=0;variant<4;variant++) {
    const slots=['14:00','14:15'];
    const needs=variant%2?['planning','documentation']:['analysis','documentation'];
    const people=Array.from({length:5},(_,i)=>({id:`p${i}`,name:`Synthetic talent ${i}`,background:i%2?'direct path':'career change',auditGroup:i%2?'direct path':'career change',
      cv:i%2?'Analysis planning documentation task guide dashboard.':'Helped a community group with its weekly rota.',
      evidence:[{id:`e${i}`,title:`Constructed work ${i}`,text:'A fixture assertion, not a verified work sample.',tags:i===4?['planning']:needs}],
      choices:['c0','c1'],slots:[...slots]}));
    const companies=[0,1].map(i=>({id:`c${i}`,name:`Synthetic company ${i}`,table:String.fromCharCode(65+i),capacity:2,
      task:`Analysis planning documentation task guide dashboard ${i}.`,needs:[...needs],choices:['p0','p1','p2','p3','p4'],slots:[...slots],teach:'Domain tools',prompt:'Discuss the example.'}));
    if(family==='transfer'){people[1].evidence[0].tags=['planning'];people[3].evidence[0].tags=[];}
    if(family==='vocabulary'){
      people[0].cv=companies[0].task.repeat(3);people[0].evidence[0].tags=[];
      people[2].cv=companies[1].task.repeat(4);people[2].evidence[0].tags=[];
    }
    if(family==='scarcity'){companies[0].capacity=1;companies[1].capacity=variant%2?1:2;people[variant%4].choices=['c0'];}
    if(family==='availability'){
      people[0].slots=['14:00'];people[1].slots=['14:00'];people[2].slots=['14:15'];
      companies[0].slots=[variant%2?'14:15':'14:00'];companies[0].capacity=1;
      if(variant===3)people[3].slots=[];
    }
    if(family==='opt-in'){
      people[0].choices=[];companies[0].choices=['p1','p3'];people[1].choices=['c1'];
      companies[1].choices=variant%2?['p2']:['p2','p3'];
    }
    if(family==='incomplete'){
      companies[0].needs=[];people[1].evidence=[];
      if(variant===2)companies[1].needs=['unknown capability'];
    }
    scenarios.push({id:`${family}-${variant}`,family,split:['transfer','vocabulary','scarcity'].includes(family)?'dev':'heldout',
      data:{event:{name:'Synthetic family audit',synthetic:true},slots,companies,people},
      cancellation:family==='cancellation'?{unavailable:[`p${variant}`]}:null});
  }
}
await writeFile('eval/fixtures.json',JSON.stringify({version:'fixture-v1',provenance:'Builder-authored synthetic assertions. No human hiring quality labels.',scenarios},null,2)+'\n');
console.log(`Wrote ${scenarios.length} fixture scenarios; whole families have one split only.`);
