FROM node:16

ENV NODE_ENV=production

WORKDIR /

COPY package.json .
COPY package-lock.json .
COPY system/package.json .
COPY system/package-lock.json .

RUN npm install

COPY . .

USER nextjs

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]