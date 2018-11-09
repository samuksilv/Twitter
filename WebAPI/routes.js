const express = require("express");
const likeController = require('./controllers/LikeController');
const tweetController = require('./controllers/TweetController');
const routes = express.Router();
const swaggerSpec = require('./src/swagger/swaggerConfig');

/**
 * @swagger
 * definitions:
 *   Tweet:
 *     properties:
 *       author:
 *         type: string
 *       content:
 *         type: string
 *       likes:
 *         type: number
 *       createdAt:
 *         type: date
 */

/**
 * @swagger
 *  /api/tweets:
 *   get:
 *     tags:
 *       - Tweet
 *     description: Returns all tweets
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tweets
 *         schema:
 *           $ref: '#/definitions/Tweet'
 *   post:
 *     tags:
 *       - Tweet
 *     description: Returns tweet created
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Tweet
 *         description: Tweet object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Tweet'
 *     responses:
 *       201:
 *         description: tweet created
 *         schema:
 *           $ref: '#/definitions/Tweet'
 *   put:
 *     tags:
 *       - Tweet
 *     description: Returns tweet updated
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: tweet updated
 *         schema:
 *           $ref: '#/definitions/Tweet'
 */
routes.route('/api/tweets')
    .get(tweetController.get)
    .post(tweetController.create)
    .put(tweetController.edit);

routes.route('/api/tweets/:id')
    .get(tweetController.findByID)
    .put(tweetController.edit)
    .delete(tweetController.delete)

routes.route('/api/likes/:id')
    .post(likeController.like)
    .put(likeController.like);

routes.route('/api/unlikes/:id')
    .post(likeController.unlike)
    .put(likeController.unlike);

// serve swagger
routes.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

module.exports = routes;