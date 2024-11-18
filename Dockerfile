FROM node:18

WORKDIR /portfolio

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=5575

EXPOSE 5575

CMD ["npm", "start"]