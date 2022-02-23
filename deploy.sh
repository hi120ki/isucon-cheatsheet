yarn build

rm -r ~/src/github.com/hi120ki/hi120ki.github.io/isucon/

cp -r ~/src/github.com/hi120ki/isucon-cheatsheet/build/ ~/src/github.com/hi120ki/hi120ki.github.io/isucon/

cd ~/src/github.com/hi120ki/hi120ki.github.io/isucon/

git checkout main

git add -A

git commit -m "deploy"

git push origin main
