const express = require("express");

const Applications = (auth = 'v1') => {

    const router = express.Router();

    const { PostApplication, GetApplications, PostApproval, GetApprovals} = require("../controllers/ApplicationControllers.js");

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);
    const whitelist = require(`../../../auth/${auth}/middlewares/whitelist.js`);

    router.get('/:guildid', authenticated, whitelist(auth), GetApplications);

    router.post('/', authenticated, PostApplication);

    router.post('/:guildid/:applicationid/approve', authenticated, whitelist(auth), PostApproval);

    router.get('/:guildid/approvals', authenticated, whitelist(auth), GetApprovals);

    return router;

}

module.exports = Applications;