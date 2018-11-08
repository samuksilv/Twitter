const express= require("express");
const likeController = require('./controllers/LikeController');
const tweetController = require('./controllers/TweetController');
const routes= express.Router();

routes.route('/tweets')
    .get(tweetController.get)
    .post(tweetController.create)
    .put(tweetController.edit);

routes.route('/tweets/:id')
    .get(tweetController.findByID)
    .put(tweetController.edit)
    .delete(tweetController.delete)

routes.route('/likes/:id')
    .post(likeController.like)
    .put(likeController.like);

routes.route('/unlikes/:id')
    .post(likeController.unlike)
    .put(likeController.unlike);

module.exports= routes;
