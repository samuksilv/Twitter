require('./infra/environments/environments');
const database = require('./infra/database/database.mongo');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
var bodyParser = require('body-parser');

const TweetController = require('./controllers/tweetController');

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
