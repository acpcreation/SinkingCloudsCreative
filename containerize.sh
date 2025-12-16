#!/usr/bin/env bash

ORGANIZATION="acpcreation"
CONTAINER_NAME="sc-creative"
# echo "Building and running the Docker container: $ORGANIZATION/$CONTAINER_NAME"
echo "Building and running the Docker container: $CONTAINER_NAME"


# docker build --platform linux/amd64 -t $ORGANIZATION/$CONTAINER_NAME .

docker buildx build --platform linux/arm64 --provenance=false --load -t $CONTAINER_NAME:latest .

# docker run -it -p 8080:80 --rm --name $CONTAINER_NAME $ORGANIZATION/$CONTAINER_NAME

