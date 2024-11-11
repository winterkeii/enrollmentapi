const express = require('express');
const router = express.Router();
const userController = require("../controllers/User-Controller.js")


//User Registration
router.post('/register', userController.registerUser)

module.exports = router;