const express = require("express");
const router = express.Router();

const { PostApplication, GetApplications, PostApproval, GetApprovals} = require("../controllers/ApplicationControllers.js");

const authenticated = require('../../auth/middlewares/authenticated.js');
const whitelist = require('../../auth/middlewares/whitelist.js');

router.get('/:guildid', authenticated, whitelist, GetApplications);

router.post('/', authenticated, PostApplication);

router.post('/:guildid/:applicationid/approve', authenticated, whitelist, PostApproval);

router.get('/:guildid/approvals', authenticated, whitelist, GetApprovals);

module.exports = router;