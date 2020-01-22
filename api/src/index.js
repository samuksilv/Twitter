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

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`.green);
});

app.use('/api', TweetController);

app.use(errorsHandler);