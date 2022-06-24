#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into build output directory
cd dist

# echo 'www.edibotopic.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if auto-deploying to https://edibotopic.github.io
# git push -f git@github.com:edibotopic/edibotopic.github.io.git main

# if auto-deploying to https://edibotopic.github.io/edibotopic-website
# git push -f git@github.com:edibotopic/edibotopic-website.git main:gh-pages

cd -
