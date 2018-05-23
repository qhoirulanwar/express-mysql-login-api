const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user')

router.route('/register')
    .post(userControllers.registrasi)

router.route('/login')
    .post(userControllers.login)

module.exports = router;