require('./infra/environments/environments');
const database = require('./infra/database/database-mongo');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
var bodyParser = require('body-parser');

const TweetController = require('./controllers/tweet-controller');
const errorsHandler = require('./middlewares/error-middleware');
const HttpError = require('./handlers/custom-erros/http-error');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.API_PORT || 3000;

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use('/api', TweetController);

server.listen(port, () => {
    console.log(`server started on port ${port}`.green);
});

app.use(errorsHandler);