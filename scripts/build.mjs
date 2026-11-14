import {mkdir,rm,cp} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist');
for (const name of ['index.html','styles.css','src','public','eval','docs','LICENSE','README.md','EVAL_SPEC.md'])
  await cp(name, `dist/${name}`, {recursive:true});
console.log('Static app and inspectable evidence built in dist/.');
