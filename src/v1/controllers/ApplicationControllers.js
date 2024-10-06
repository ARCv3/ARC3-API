const Application = require('../db/Application'); 
const clean = str =>  str.replace(/[^\x00-\x7F]/g, "");
const escape = require('escape-html');

async function PostApplication(req, res) {

  const {
    experience,
    position, 
    server,
    botexp,
    avail,
    message,
    about,
    age,
    joindate
  } = req.body;

  // Get the current user
  const self = await req.state.self();




}