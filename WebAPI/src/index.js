const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var path = require('path');

mongoose.connect("mongodb://samuel:S4mu3l@ds155263.mlab.com:55263/devsamuel",
    { useNewUrlParser: true })

const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '..','public')));

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());

app.use(express.json());
app.use(require('../routes'));

server.listen(3000, () => console.log("Server started on port 3000"));