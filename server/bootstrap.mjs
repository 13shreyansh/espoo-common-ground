import {parseCredentialPipe} from './runtime-secrets.mjs';
let secret='';for await(const chunk of process.stdin)secret+=chunk;Object.assign(process.env,parseCredentialPipe(secret));secret='';await import('./server.mjs');
