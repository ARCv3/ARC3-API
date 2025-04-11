const express = require('express');

const Transcripts = (auth = 'v1') => {
    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);
    const whitelist = require(`../../../auth/${auth}/middlewares/whitelist.js`);
    
    const { GetTranscripts, GetMailIds } = require('../controllers/TranscriptControllers.js');
    
    // Send the user all the transcripts
    router.get('/:guildid/:mailId', authenticated, whitelist(auth), GetTranscripts);
    router.get('/:guildid/', authenticated, whitelist(auth), GetMailIds);

    return router;    

} 

module.exports = Transcripts;