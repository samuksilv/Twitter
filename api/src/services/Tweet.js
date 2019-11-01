const Tweet = require('../models/tweet');

const TweetService = {

    save: async (tweetReq) => {

        console.log(tweetReq);
        console.log(!tweetReq );
        console.log(!tweetReq.author);
        console.log(!tweetReq.content);

        if(!(tweetReq && tweetReq.author && tweetReq.content))
            throw new Error("Tweet empty");
            
        const tweet = await Tweet.create(tweetReq);

        return tweet;
    },
    update: async (id, tweet) => {

    },
    delete: async (id) => {

    },
    getAll: async () => {
        const tweets = await Tweet.find({}).sort("-createdAt");
        return tweets;
    },
    getById: async (id) => {

        console.log(id);
        if(!id) return null;

        const tweet = await Tweet.findById(id);
        return tweet;
    },
};

module.exports = TweetService;

