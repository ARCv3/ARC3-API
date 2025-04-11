const express = require('express');

const Discord = (auth = 'v1') => {

    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);

    const { GetUser, GetGuild, GetMe, GetGuilds } = require('../controllers/DiscordControllers.js');
    
    router.get('/users/:id', authenticated, GetUser);
    router.get('/guilds/:id', authenticated, GetGuild);
    router.get('/me', authenticated, GetMe);
    router.get('/me/guilds', authenticated, GetGuilds);

    return router;
    
}

module.exports = Discord;