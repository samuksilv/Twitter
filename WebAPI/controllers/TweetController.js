const Tweet = require('../models/Tweet');

module.exports = {
    async get(req, res) {
        return res.json(await Tweet.find({}).sort("-createdAt"));
    },
    async findByID(req, res){
        return res.json(await Tweet.findById(req.params.id, (err)=> console.warn(err)))
    },
    async create(req, res) {
        let tweet= await Tweet.create(req.body);
        req.io.emit('tweet', tweet);        
        return res.json(tweet);
    },
    async edit(req, res) { 
        let tweet=null;
        if(Object.keys(req.params).length)
            tweet= await Tweet.findByIdAndUpdate(req.params.id, req.body, 
                (err,response)=>(err) ? console.warn(err) : console.log(response));
        else
            tweet= await Tweet.findByIdAndUpdate(req.body._id, req.body, 
                (err,response)=>(err) ? console.warn(err) : console.log(response));

        req.io.emit('tweet', tweet);
        return res.json( tweet);
    },
    async delete(req, res) {
        let tweet =Tweet.findOneAndDelete({ _id: req.params.id }, 
            (err) =>(err)? console.warn(err): console.log(req.params.id));
        req.io.emit('tweet-deleted', tweet);
        return res.status(203);
    }
};