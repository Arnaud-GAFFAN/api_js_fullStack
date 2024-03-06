
const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json({
        message: "CC ici votre server a bien dématé merci"
    })
})
route.post('/', (req, res) => {
    res.json({message: req.body.message})
})

module.exports = route;