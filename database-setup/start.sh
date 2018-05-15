#!/bin/sh

# MySQL DB to operate users microservice.
echo "Starting DB..."
docker run --name users -d \
  -e MYSQL_ROOT_PASSWORD=users \
  -e MYSQL_DATABASE=users -e MYSQL_USER=users -e MYSQL_PASSWORD=users \
  -p 3308:3306 \
  mysql:5.6

  # Wait for the database service to start up.
  echo "Waiting for Users microservice DB to start up..."
  docker exec users mysqladmin --silent --wait=30 -uusers -pusers ping || exit 1