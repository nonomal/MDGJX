#!/bin/bash

chmod +x $MDGJX_ROOT/pipeline/tools/get-web2-version.sh
crtVersion=`$MDGJX_ROOT/pipeline/tools/get-web2-version.sh`

if [ -z $crtVersion ]; then
    echo "[E] crtVersion is required."
    exit 1
fi
export NODE_ENV=development
echo "Current version: $crtVersion"

cd $(dirname $0)/..

echo "[I] cleaning up..."
rm -rf dist
rm -rf src-dist

echo "[I] compiling tsc files..."
npm run compileTS

echo "[I] run electron app..."
npx electron .