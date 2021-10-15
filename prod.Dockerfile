FROM node:latest AS react_build

WORKDIR /user/src/app

COPY client/ ./

RUN npm install && npm run build

FROM node:latest AS server_build

WORKDIR /photozilla

COPY --from=react_build /user/src/app/build ./react

COPY server/package*.json ./

RUN npm install

COPY server/ ./

ENV NODE_ENV=production

ENV PINATA_API_KEY=EXAMPLE
ENV PINATA_API_SECRET=EXAMPLE
ENV PINATA_JWT=EXAMPLE

ENV PORT=5000

EXPOSE ${PORT}

RUN npm run build

CMD [ "npm", "run", "start:prod" ]