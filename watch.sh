#!/data/data/com.termux/files/usr/bin/bash

PORT=3000

while true; do
  fuser -k ${PORT}/tcp 2>/dev/null
  node index.js
  echo "Restarting app..."
  sleep 1
done
