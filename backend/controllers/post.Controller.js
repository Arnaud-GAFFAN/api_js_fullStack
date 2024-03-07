
const PostModel = require('../Models/post.Shema')


const getPosts = async (req, res) => {
    const post = await PostModel.find();

    res.status(200).json(post);
}

const setPosts = async (req, res) => {
    if (!req.body.message){
        res.status(400).json({message: "Merci d'ajouter un messsage"})
    }else{
        const post = await PostModel.create({
            message: req.body.message,
            author: req.body.author
        })

        res.status(200).json(post);
    }
}

const editPost = async (req, res) => {
    const postId = await PostModel.findById(req.params.id);
    if (!postId){
        res.status(400).json({message: "Merci de bien vouloir mettre un id"})
    }

    const updatePost = await PostModel.findByIdAndUpdate(postId,
        req.body,
        {new: true})

    res.status(200).json(updatePost)
}

const deletePost = async (req, res) => {

    const postId = await PostModel.findById(req.params.id);

    if (!postId){
        res.status(400).json({message: "Merci de bien vouloir mettre un id"})
    }

    const result = await postId.deleteOne({_id: postId});

    res.status(200).json(result);
}

module.exports = {
    getPosts, setPosts, editPost, deletePost
}