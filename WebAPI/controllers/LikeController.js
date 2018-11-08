const Tweet= require("../models/Tweet");

module.exports ={
    async like(req, res){
        let id= req.params.id;
        let tweet= await Tweet.findById(id);
        tweet.set({likes: tweet.likes +1})
        await tweet.save();
        req.io.emit('like', tweet);
        return res.json(tweet);
    }, 
    async unlike(req, res){
        let id= req.params.id;
        let tweet= await Tweet.findById(id);
        tweet.set({likes: tweet.likes -1})
        await tweet.save();
        req.io.emit('unlike', tweet);
        return res.json(tweet);
    },
};