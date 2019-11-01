const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('Erro ao connectar com o mongodb => '.red, err);
            throw new Error(err);
        }
    });

module.exports = mongoose;
