FROM node
LABEL name "cabinquest"
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000 8080
CMD npm run build ; npm start