#!bin/bash
bun build --minify ./src/index.ts --outdir ./dist --target bun
sudo docker build -t server_name .
rm -rf dist

sudo docker save -o ./tools/to_remote/docker/server_name.tar server_name
sudo chmod 777 ./tools/to_remote/docker/server_name.tar