const express = require('express');
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/usuario', mainController.showUser);

/* router.get('/', './views/pages/home.ejs'); */

module.exports = router;