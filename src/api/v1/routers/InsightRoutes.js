const express = require("express");

const Insights = (auth = 'v1') => {

    const router = express.Router();

    const authenticated = require(`../../../auth/${auth}/middlewares/authenticated.js`);
    const { GetInsights } = require('../controllers/InsightsController.js')
    
    
    router.get('/', authenticated, GetInsights);

    return router
}


module.exports = Insights;