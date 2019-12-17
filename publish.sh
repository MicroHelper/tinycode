#!/bin/bash

rm -r ./lib

npm run build

npm version patch
cp -rf package.json lib

cd lib
npm publish