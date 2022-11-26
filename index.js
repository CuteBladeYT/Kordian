const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const fbapp = initializeApp(firebaseConfig);

const SERVER_PORT = 3000;
const SERVER_URL = `http://localhost:${SERVER_PORT}`;

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);

const sitedir = path.join(__dirname, "site");

app.use(express.static(sitedir));

httpserver.listen(SERVER_PORT);

console.log(`Server listened on ${SERVER_URL}`);

io.on("connection", async (socket) => {
  
});