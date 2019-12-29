const { Router } = require('express');

const TwitterService = require('../services/tweet');

const HttpError = require('../handlers/custom-erros/http-error');

const route = Router();

route.post('/tweet', async (req, res, next) => {
    try {
        const tweetRequest = req.body;

        const tweet = await TwitterService.save(tweetRequest);

        res.status(201).json(tweet);
        next();
    } catch (error) {
        next(error);
    }

});

route.post('/tweet/like/:id', async (req, res, next) => {
    try {

        const tweetId = req.params.id;

        const tweet = await TwitterService.likeTweet(tweetId);

        res.status(200).json(tweet);

    } catch (error) {
        next(error);
    }
});

route.post('/tweet/unlike/:id', async (req, res, next) => {
    try {

        const tweetId = req.params.id;

        const tweet = await TwitterService.unlikeTweet(tweetId);

        res.status(200).json(tweet);

    } catch (error) {
        next(error);
    }
});

route.get('/tweet', async (req, res, next) => {
    try {

        const tweets = await TwitterService.getAll();

        res.status(200).json(tweets);

    } catch (error) {
        next(error);
    }
});

route.get('/tweet/:id', async (req, res, next) => {
    try {

        const tweetId = req.params.id;

        const tweet = await TwitterService.getById(tweetId);

        if (tweet)
            res.status(200).json(tweet);
        else
            throw new HttpError("Tweet não encontrado", 404);

    } catch (error) {
        next(error);
    }
});

route.put('/tweet/:id', async (req, res, next) => {
    try {

        const tweetId = req.params.id;
        const tweetReq = req.body;

        const tweet = await TwitterService.update(tweetId, tweetReq);

        if (tweet)
            res.status(200).json(tweet);
        else
            throw new HttpError("Tweet não encontrado", 404);

    } catch (error) {
        next(error);
    }
});

route.delete('/tweet/:id', async (req, res, next) => {
    try {

        const tweetId = req.params.id;

        await TwitterService.delete(tweetId);

        res.status(204).end();

    } catch (error) {
        next(error);
    }
});

module.exports = route;