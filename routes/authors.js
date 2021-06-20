const express = require('express');
const authorsController = require('../controllers/authors');

const router = express.Router();

router.get('/authors', authorsController.getAuthors);
module.exports = router;

