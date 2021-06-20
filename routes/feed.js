const express = require("express");
const feedController = require("../controllers/feed");

const router = express.Router();

// GET: retrieve data
router.get("/posts", feedController.getPosts);

//POST: insert data
router.post("/post", feedController.createPost);

module.exports = router;
