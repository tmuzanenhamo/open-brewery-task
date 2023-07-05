FROM node:16

RUN npm install -g npm@9.7.2

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000
CMD ["npm", "run", "dev"]