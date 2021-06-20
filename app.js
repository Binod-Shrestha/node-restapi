//0. import express library
const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const authorRoutes = require('./routes/authors');
const app = express();

app.use(bodyParser.urlencoded()); //x-www-form-rulencoded <form>
app.use(bodyParser.json()); // application/json


app.use('/feed', feedRoutes); // any incoming request with "feed" goes here
app.use('/writers', authorRoutes)
app.listen(8080);