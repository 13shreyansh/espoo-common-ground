// Runs before first paint: the landing page is static HTML; every other path is the workspace.
document.documentElement.className=location.pathname==='/'?'landing':'workspace';
