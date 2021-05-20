#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/BaIGaO/Pathologic-Prognostic-Analysis.git
git push -f git@github.com:BaIGaO/Pathologic-Prognostic-Analysis.git main:gh-pages

cd -