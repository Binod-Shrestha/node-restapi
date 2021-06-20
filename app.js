//0. import express library
const express = require("express");
const feedRoutes = require("./routes/feed");
const authorRoutes = require("./routes/authors");
const app = express();

app.use(express.urlencoded({ extended: true })); //x-www-form-rulencoded <form>
app.use(express.json({ extended: true })); // application/json

//CORS Errors Solution
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Headers", "Content-type, Authorization");
  next();
});

app.use("/feed", feedRoutes); // any incoming request with "feed" goes here
app.use("/writers", authorRoutes);
app.listen(8080);
