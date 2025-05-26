#!/bin/bash
NAME=$1
PORT=$2

sudo docker create --name $NAME -p $PORT:3000 --restart unless-stopped server_name
sudo docker start $NAME

sudo service nginx reload