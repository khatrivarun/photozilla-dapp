FROM node:latest

WORKDIR /server

COPY package.json .

RUN npm install

COPY . ./

ENV PORT=5000
ENV PINATA_API_KEY=EXAMPLE
ENV PINATA_API_SECRET=EXAMPLE
ENV PINATA_JWT=EXAMPLE

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]