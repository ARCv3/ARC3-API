const express = require("express");

const Stats = (auth = 'v1') => {

    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);
    const { GetCommands } = require('../controllers/StatController.js')


    router.get('/', authenticated, GetCommands);

    return router;

}

module.exports = Stats;