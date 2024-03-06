// Appel de express pour traiter les requêtes back
const express = require('express');
const {urlencoded} = require("express");

const port = 7000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/post', require('./routes/post.route'));


app.listen(port, () => console.log("Le server a bien démaré sur le port "+ port));