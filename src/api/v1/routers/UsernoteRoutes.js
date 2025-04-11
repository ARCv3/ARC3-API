const express = require('express');

const Notes = (auth = 'v1') => {

    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);
    const whitelist = require(`../../../auth/${auth}/middlewares/whitelist.js`);
    
    const { GetUsers, GetUserNotes, GetUserNotesBy } = require('../controllers/UserNotesControllers.js') 
    
    
    router.get('/:guildid/:userid', authenticated, whitelist(auth), GetUserNotes);
    router.get('/:guildid', authenticated, whitelist(auth), GetUsers);
    router.get('/:guildid/by/:userid', authenticated, whitelist(auth), GetUserNotesBy);
    
    return router

}

module.exports = Notes;