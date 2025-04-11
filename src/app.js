const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const app = express();

const v1 = require('./api/v1/v1.js');
const v2 = require('./api/v2/v2.js')

const authv1 = require('./auth/v1/auth.js');
const authv2 = require('./auth/v2/auth.js')

const cors = require("cors")

app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "cdn.discordapp.com", "st3.depositphotos.com"],
      },
    },
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// v1 API
app.use('/auth', authv1);
app.use('/api', v1());

// v2 API
app.use('/v2/api', v2());
app.use('/v2/auth', authv2);

console.log("Frontend hosted at: " + process.env.HOSTED_URL)

module.exports = app;
