const express = require('express');
const Discord = require('./routers/DiscordRoutes.js');
const v1 = require('../v1/v1.js');

const v2 = (auth = 'v2') => {
  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({extended: true}));
  
  router.use('/discord', Discord());
  
  router.get('/health', (req, res) => {
    res.status(200);
    res.json({
      message: "Service is online"
    })
  })

  router.use('/', v1('v2'))
  
  router.use((req, res) => {
    const errObj = {'status': 404, 'error': 'Page not found'};
    res.status(404);
    res.json(errObj);
  });

  return router;
}

module.exports = v2;
