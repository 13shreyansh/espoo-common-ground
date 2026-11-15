"""Decrypt host-bound credentials directly into the container's stdin. Never log."""
import json,subprocess,sys
from pathlib import Path
result={}
for name,key in [('espoo-gemini','GEMINI_API_KEY'),('espoo-context','CONTEXT_DEV_API_KEY')]:
    path=Path('/var/lib/espoo-common-ground')/(name.removeprefix('espoo-')+'.cred')
    if path.exists():
        result[key]=subprocess.check_output(['systemd-creds','decrypt','--name='+name,str(path),'-'],stderr=subprocess.DEVNULL).decode().strip()
json.dump(result,sys.stdout)
