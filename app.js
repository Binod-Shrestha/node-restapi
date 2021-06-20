//0. import express library
const express = require('express');
const app = express();
const feedRoutes = require('./routes/feed');
const authorRoutes = require('./routes/authors');

//adding routing
app.use('/feed', feedRoutes); // any incoming request with "feed" goes here
app.use('/writers', authorRoutes)

app.listen(8080);