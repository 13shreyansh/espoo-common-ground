let secret='';for await(const chunk of process.stdin)secret+=chunk;process.env.GEMINI_API_KEY=secret.trim();secret='';await import('./server.mjs');
