const express = require('express');
const router = express.Router();

const courseController = require("../controllers/Course-Controller.js")

//User Registration

router.post('/course', courseController.registerCourse)
module.exports = router;