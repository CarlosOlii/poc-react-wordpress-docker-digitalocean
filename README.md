# React App, Wordpress, Docker and DigitalOcean API 
A possible way to integrate frontend using **React** with **WordPress** as backend. \
Using **docker** for local development and production. \
Integrated with **Digitalocean API** to create droplet and deploy.

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