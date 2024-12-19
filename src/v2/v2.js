const express = require('express');
const Discord = require('./routers/DiscordRoutes.js');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.use('/discord', Discord);

router.use((req, res) => {
  const errObj = {'status': 404, 'error': 'Page not found'};
  res.status(404);
  res.json(errObj);
});

module.exports = router;