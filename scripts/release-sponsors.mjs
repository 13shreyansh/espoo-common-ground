// Stage an immutable cloud release before changing the production service.
import {spawn,execFileSync} from 'node:child_process';
const host='root@72.61.22.106',commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
if(!/^[a-f0-9]{40}$/.test(commit))throw Error('A source commit is required.');
const release='/opt/espoo-common-ground/releases/'+commit,stageUnit='espoo-sponsor-'+commit.slice(0,12),stageContainer=stageUnit,stageRoot='/var/lib/espoo-common-ground/staging/'+commit;
const quote=s=>"'"+s.replaceAll("'","'\\''")+"'";
function ssh(command,input){return new Promise((resolve,reject)=>{const p=spawn('ssh',['-o','BatchMode=yes',host,command],{stdio:['pipe','pipe','pipe']});let out='';p.stdout.on('data',b=>out+=b);p.stderr.on('data',b=>out+=b);p.on('close',code=>code?reject(Error(out)):resolve(out));p.stdin.end(input);});}
function unit(container,port,data){return `[Unit]\nDescription=Common Ground ${container}\nAfter=docker.service network-online.target\nRequires=docker.service\n[Service]\nRestart=always\nRestartSec=3\nExecStartPre=-/usr/bin/docker rm -f ${container}\nExecStart=/bin/bash -o pipefail -c '/usr/bin/python3 ${release}/scripts/runtime-credentials.py | /usr/bin/docker run --rm -i --name ${container} --memory=768m --cpus=1 -p ${port}:4173 -e NODE_ENV=${port===3102?'production':'staging'} -e DATA_DIR=/data -e COMMIT_SHA=${commit} -w /app -v ${release}:/app:ro -v ${data}/runtime:/data -v ${data}/ai-cache:/app/cache/gemini -v ${data}/esco-cache:/app/cache/esco node:24-alpine node server/bootstrap.mjs'\nExecStop=/usr/bin/docker stop ${container}\n[Install]\nWantedBy=multi-user.target\n`;}
const mode=process.argv[2];
if(mode==='--stage'){
 await ssh('test -s /var/lib/espoo-common-ground/gemini.cred && test -s /var/lib/espoo-common-ground/context.cred && mkdir -p '+release+' '+stageRoot+'/{runtime,ai-cache,esco-cache}');
 const entries=['server','client','src','scripts/fetch-cache.mjs','scripts/runtime-credentials.py','cache','fixtures','eval/v2','index.html','styles.css','sw.js','fonts','icons.svg','favicon.svg'];
 const tar=spawn('tar',['-czf','-',...entries],{stdio:['ignore','pipe','pipe']}),remote=spawn('ssh',['-o','BatchMode=yes',host,'tar -xzf - -C '+release],{stdio:['pipe','pipe','pipe']});tar.stdout.pipe(remote.stdin);await new Promise((ok,no)=>remote.on('close',code=>code?no(Error('Stage upload failed.')):ok()));
 await ssh('cp -n '+release+'/cache/gemini/*.json '+stageRoot+'/ai-cache/; cp -n '+release+'/cache/esco/*.json '+stageRoot+'/esco-cache/');
 await ssh('cat > /etc/systemd/system/'+stageUnit+'.service',unit(stageContainer,3103,stageRoot));
 await ssh('systemctl daemon-reload && systemctl start '+stageUnit);
}else if(mode==='--promote'){
 const checked=await(await fetch('http://72.61.22.106:3103/health')).json();if(checked.commit!==commit||!checked.writing_helper_configured||!checked.website_lookup_configured)throw Error('The exact staged release has not passed its health check.');
 await ssh('cat > /etc/systemd/system/espoo-common-ground.service',unit('espoo-common-ground',3102,'/var/lib/espoo-common-ground'));
 await ssh('systemctl daemon-reload && systemctl restart espoo-common-ground');
}else throw Error('Use --stage, verify it, then --promote after review.');
const port=mode==='--stage'?3103:3102;
let good=false;for(let i=0;i<25;i++){try{const r=await fetch('http://72.61.22.106:'+port+'/health',{signal:AbortSignal.timeout(2000)}),health=await r.json();if(health.commit===commit&&health.writing_helper_configured&&health.website_lookup_configured){good=true;break;}}catch{}await new Promise(r=>setTimeout(r,300));}
if(!good)throw Error('Release health check failed.');
console.log(JSON.stringify({mode,commit,health:'ok',url:mode==='--stage'?'http://72.61.22.106:3103':'https://espoo-common-ground.vercel.app'}));
