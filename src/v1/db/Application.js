const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  _id: String,
  guildSnowflake: String,
  userSnowflake: String,
  experience: String,
  position: String, 
  server: String,
  botexp: String,
  avail: String,
  message: String,
  about: String,
  age: String,
  joindate: String
})

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;