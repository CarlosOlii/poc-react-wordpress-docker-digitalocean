# Wordpress Headless With React App
The main objective of this project is to create a react app using wordpress serverless.

# Stack
- Docker
- React
- Jest
- Wordpress
- DigitalOcean API

## Development
### Start: `docker-compose up`
Frontend url: http://localhost:3000 \
Backend url: http://localhost:8001
### Frontend Tests: `docker-compose run frontend npm test`

## Production
### Create droplet and deploy: ` ./deploy.sh`
Frontend url: IP or DOMAIN
Backend url: IP or DOMAIN + :8001