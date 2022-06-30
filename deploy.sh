#!/bin/bash

docker-machine create --driver digitalocean \
 --digitalocean-image ubuntu-20-04-x64 \
 --digitalocean-access-token dop_v1_2e687fac41075c51ca261ff919529c0d4cb3726f3d4625d805ef3b5c483efeda \
 --digitalocean-region fra1 \
 --engine-install-url "https://releases.rancher.com/install-docker/19.03.9.sh" \
 mypointi-wordpress-react-live

eval $(docker-machine env mypointi-wordpress-react-live)

docker-compose -f docker-compose.prod.yml build --parallel

docker-compose -f docker-compose.prod.yml up