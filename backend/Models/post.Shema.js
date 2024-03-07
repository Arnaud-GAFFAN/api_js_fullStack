const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        message: {type: String, require: true},
        author: {type: String, require: true},
        likers: {type: []}
    },
    {
        timestamps : true
    })


const PostModel = mongoose.model('Posts', postSchema);
module.exports = PostModel;