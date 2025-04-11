
module.exports = (auth = 'v2') => {
  const Guild = require('../../../db/v1/Guild.js');

  const whitelist = async (req, res, next) => {

    const id = req.params.guildid;
  
    if (id === undefined) {
  
      res.status(400).json({
        status: 400,
        message: "Invalid id"
      })
  
      return;
    }
  
    const guilds = await Guild.find();
    const guild = guilds.filter(x => x.guildsnowflake === id)
  
    if (guild.length === 0) {
      res.status(404).json({
        status: 404,
        message: "Could not find that guild"
      })
  
      return;
    }
  
    const moderators = guild[0].moderators;
  
    req.state.self().then(x => {
      if (moderators.includes(x.id)) {
        next();
        return;
      } else {
        res.status(401).json({
          status: 401,
          message: "Unauthorised"
        });
      }
    })
  
  
  }

  return whitelist;

}