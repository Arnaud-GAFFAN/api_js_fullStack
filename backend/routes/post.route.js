const express = require('express');
const {getPosts, setPosts, editPost, deletePost} = require("../controllers/post.Controller");

const route = express.Router();

route.get('/', getPosts)

route.post('/', setPosts)

route.put('/:id', editPost)

route.delete('/:id', deletePost)

route.patch('/likes-posts/:id', (req, res) => {
    res.json({message: "Un like: id : " + req.params.id})
})
route.patch('/dislikes-posts/:id', (req, res) => {
    res.json({message: "Un like: id : " + req.params.id})
})
module.exports = route;