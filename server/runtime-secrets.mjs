export function parseCredentialPipe(input){
 const value=input.trim();if(!value)throw Error('Runtime writing helper credential was not provided.');
 if(!value.startsWith('{'))return {GEMINI_API_KEY:value};
 const parsed=JSON.parse(value),allowed=new Set(['GEMINI_API_KEY','CONTEXT_DEV_API_KEY']);
 if(!parsed.GEMINI_API_KEY||Object.entries(parsed).some(([key,value])=>!allowed.has(key)||typeof value!=='string'))throw Error('Runtime service credentials are invalid.');
 return parsed;
}
