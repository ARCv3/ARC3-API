const express = require('express');
const Transcripts = require('./routers/TranscriptRoutes.js');
const Discord = require('./routers/DiscordRoutes.js');
const Appeals = require('./routers/AppealsRoutes.js');
const Notes = require('./routers/UsernoteRoutes.js');
const Insights = require('./routers/InsightRoutes.js');
const Stats = require('./routers/StatRoutes.js');
const Applications = require('./routers/ApplicationRoutes.js');

const v1 = (auth = 'v1') => {
  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({extended: true}));
  
  router.use('/transcripts', Transcripts(auth));
  console.log(auth)
  router.use('/discord', Discord(auth));
  router.use('/appeals', Appeals(auth));
  router.use('/notes', Notes(auth));
  router.use('/insights', Insights(auth));
  router.use('/stats', Stats(auth));
  router.use('/applications', Applications(auth))
  
  router.use((req, res) => {
    const errObj = {'status': 404, 'error': 'Page not found'};
    res.status(404);
    res.json(errObj);
  });

  return router
}

module.exports = v1;