const { Router } = require('express');

const TwitterService = require('../services/Tweet');

const route = Router();

route.post('/tweet', async (req, res) => {
    try {
        const tweetRequest = req.body;

        const tweet = await TwitterService.save(tweetRequest);

        res.status(201).json(tweet);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
            stackTracer: error.stack
        });
    }
});


route.get('/tweet', async (req, res) => {
    try {

        const tweets = await TwitterService.getAll();

        res.status(201).json(tweets);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
            stackTracer: error.stack
        });
    }
});

route.get('/tweet/:id', async (req, res) => {
    try {
        
        const tweetId = req.params.id;

        const tweet = await TwitterService.getById(tweetId);

        if (tweet)
            res.status(201).json(tweet);
        else
            res.status(400).json({
                message: "Tweet NotFound"
            });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
            stackTracer: error.stack
        });
    }
});


module.exports = route;