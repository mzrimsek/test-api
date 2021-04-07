# test-api
A barebones API running in Docker to verify data communication

## Running It
---

### Docker

1. Make a `.env` file like this (change the variable to whatever port you want to use to connect to the container)
```
HOST_PORT=3000
```
2. Use the provided Docker Compose file and just run `docker-compose --env-file .env up -d`

Alternatively just edit the Docker Compose file to declare the port inline and run `docker-compose up -d`.

### Without Docker

Run `npm start` to start the server

## Endpoints
---

Send your requests to `localhost:3000` or whatever you configured the port to be.

Each endpoint will log some data about the request being sent.

### GET

Sends back an OK with "Hello" as the response body

### POST

Sends back an OK with the same body you passed it.
