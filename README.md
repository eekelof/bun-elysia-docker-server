# bun-elysia-docker-server
Template for server with Bun, Elysia & Docker

## Dev Instructions
### Install dependencies
```sh
bun i
```

### Start server
```sh
bun src/index.ts 
```

### CURL test
```sh
curl -X POST -H "Content-Type: application/json" -d '{"m":"chat","message":"hello"}' http://localhost:3000/
```

## Deploy Instructions
### Local Machine
```sh
# Build docker image
bash tools/builddocker.sh

# SCP to_remote folder to server
scp -r tools/to_remote name@ip:/name/
```

### Remote Machine
```sh
# Load docker image from tar
sudo docker load -i to_remote/docker/server_name.tar

# Start docker image, params: docker instance name & port
bash to_remote/startserver.sh server_name_1 3000
```