const express= require("express");
const routes= express.Router();
const tweetController = require('./controllers/TweetController');
const likeController = require('./controllers/LikeController');

routes.get("/", (req, res) => {
    return res.send("Hello Word!")
});

routes.get('/tweets',tweetController.get);
routes.get('/tweets/:id',tweetController.findByID);
routes.post('/tweets',tweetController.create);
routes.put('/tweets',tweetController.edit);
routes.put('/tweets/:id',tweetController.edit);
routes.delete('/tweets/:id',tweetController.delete);

routes.post('/likes/:id',likeController.like);
routes.put('/likes/:id',likeController.like);
routes.post('/unlike/:id',likeController.unlike);
routes.post('/unlike/:id',likeController.unlike);

module.exports= routes;
