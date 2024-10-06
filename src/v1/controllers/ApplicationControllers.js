const Application = require('../db/Application'); 
const clean = str =>  str.replace(/[^\x00-\x7F]/g, "");
const escape = require('escape-html');

async function PostApplication(req, res) {

  let {
    experience,
    position, 
    server,
    botexp,
    avail,
    message,
    about,
    age,
    joindate,
    guildSnowflake
  } = req.body;

  if (experience == undefined ||
      position == undefined ||
      server == undefined ||
      botexp == undefined ||
      avail == undefined ||
      message == undefined ||
      about == undefined ||
      age == undefined ||
      joindate == undefined ||
      guildSnowflake == undefined
  ) {

    res.status(400);
    res.json({
      status: 400,
      error: "failed to submit, fill in all the fields."
    })

    return;
  }
  
  // Get the current user
  const self = await req.state.self();
  const date = new Date();

  const existing = await Application.find({'userSnowflake': self.id});

  if (existing.length > 0) {

    res.status(403);
    res.json({
      status: 403,
      error: "Unauthorized you already have applied."
    })

    return;
  }

  experience = clean(escape(experience))
  position = clean(escape(position))
  server = clean(escape(server))
  botexp = clean(escape(botexp))
  avail = clean(escape(avail))
  message = clean(escape(message))
  about = clean(escape(about))
  age = clean(escape(age))
  joindate = clean(escape(joindate))

  try {

    const application = new Application({
      guildSnowflake: guildSnowflake,
      userSnowflake: self.id,
      submitDate: date.getTime(),
      experience: experience,
      position: position,
      server: server,
      botexp: botexp,
      avail: avail,
      message: message,
      about: about,
      age: age,
      joindate: joindate
    })

    application.save();

    res.status(200);
    res.json({
      'status': 200,
      'message': "application submitted."
    })

  } catch (e) {

    console.error(e.message);

    res.status(500);
    res.json({
      'status': 500,
      'error': 'An Error occured please try again.'
    })

  }

}

async function GetApplications(req, res) {
  
  const guildid = req.params.guildid;

  if (guildid === undefined) {
    
    res.status(400).json({
      status: 400,
      message: 'Invalid id'
    });

    return;
  }

  try {

    const applications = await Application.find({guildSnowflake: guildid});
    res.status(200).json(applications);

  } catch (e) {

    console.error(e.message);

    res.status(500);
    res.json({
      'status': 500,
      'error': 'An Error occured. Please try again later.'
    });

  }

}

module.exports = {PostApplication, GetApplications}