const express = require('express');
const router = express.Router();

const authenticated = require('../../auth/middlewares/authenticated.js')

const { GetMe } = require('../controllers/DiscordControllers.js');

router.get('/me', authenticated, GetMe);

module.exports = router;