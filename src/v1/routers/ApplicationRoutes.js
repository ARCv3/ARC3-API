const express = require("express");
const router = express.Router();

const { PostApplication, GetApplications} = require("../controllers/ApplicationControllers.js");

const authenticated = require('../../auth/middlewares/authenticated.js');
const whitelist = require('../../auth/middlewares/whitelist.js');

router.get('/:guildid', authenticated, whitelist, GetApplications);

router.post('/', authenticated, PostApplication)

module.exports = router;