const Tweet = require('../models/tweet');
const HttpError = require('../handlers/custom-erros/http-error');

async function save(tweetReq) {

    if (!tweetReq.author)
        throw new HttpError("Informe o autor do tweet.", 400);
        
    if (!tweetReq.content)
        throw new HttpError("Informe o conteudo do tweet.", 400);

    const tweet = await Tweet.create(tweetReq);

    return tweet;
};

async function update(id, tweetReq) {

    console.log(id);

    if (!id)
        throw new HttpError("Informe um id válido.", 400);

    if (!tweetReq.author)
        throw new HttpError("Informe o autor do tweet.", 400);

    if (!tweetReq.content)
        throw new HttpError("Informe o conteudo do tweet.", 400);

    const tweet = await Tweet.findByIdAndUpdate(id, tweetReq, { new: true });
    return tweet;
};

async function deleteTweet(id) {

    console.log(id);
    if (!id)
        throw new HttpError("Informe um id válido.", 400);

    await Tweet.findByIdAndDelete(id);
};

async function getAll() {
    const tweets = await Tweet.find({}).sort("-createdAt");
    return tweets;
};

async function getById(id) {

    console.log(id);
    if (!id)
        throw new HttpError("Informe um id válido.", 400);

    const tweet = await Tweet.findById(id);
    return tweet;
};

async function likeTweet(id) {
    if (!id)
        throw new HttpError("Informe um id válido.", 400);

    let tweet = await Tweet.findById(id);

    if (!(tweet && tweet.id))
        throw new HttpError("Tweet não encontrado", 404);

    tweet.likes += 1;

    console.log(tweet.likes);

    return await tweet.save();
}

async function unlikeTweet(id) {

    if (!id)
        throw new HttpError("Informe um id válido.", 400);

    let tweet = await Tweet.findById(id);

    if (!(tweet && tweet.id))
        throw new HttpError("Tweet não encontrado", 404);

    if (tweet.likes > 0) {
        tweet.likes -= 1;

        console.log(tweet.likes);

        return await tweet.save();
    } else {
        return tweet;
    }
}

const TweetService = {
    save,
    update,
    delete: deleteTweet,
    getAll,
    getById,
    likeTweet,
    unlikeTweet
};

module.exports = TweetService;

