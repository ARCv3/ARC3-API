const mongoose = require('mongoose');

const ApprovalSchema = new mongoose.Schema({
  guildSnowflake: String,
  userSnowflake: String,
  authorSnowflae: String
})

const Approval = mongoose.model('Approval', ApprovalSchema);

module.exports = Approval;