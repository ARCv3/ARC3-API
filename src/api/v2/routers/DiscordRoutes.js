const express = require('express');

const Discord = (auth = 'v2') => {

    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);

    const { GetMe } = require('../controllers/DiscordControllers.js');

    router.get('/me', authenticated, GetMe);

    return router;

}

module.exports = Discord;