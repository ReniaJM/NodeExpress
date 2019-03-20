const mongoose = require('mongoose');

const {Schema}= mongoose;

const bookModel = new Schema(
    {
        author: {type: String},
        country: {type: String},
        title: {type: String},

    }
);

module.exports= mongoose.model('book', bookModel);
