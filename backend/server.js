// Appel de express pour traiter les requêtes back
const express = require('express');
const {urlencoded} = require("express");
require('dotenv').config();
const app = express();
const connectDB = require('./config/data_base');

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/post', require('./routes/post.route'));



app.listen(process.env.PORT, () => console.log("Le server  a bien démaré sur le port " + process.env.PORT));