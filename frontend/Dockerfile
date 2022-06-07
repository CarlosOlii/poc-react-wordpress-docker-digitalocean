FROM node:18.0.0-alpine3.15
#RUN addgroup app && adduser -S -G app app
#RUN mkdir /app && chown app:app /app
#USER app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]