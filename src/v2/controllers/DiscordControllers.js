const UserData = require('../db/UserData.js')
const uuid = require('uuid');


async function GetMe(req, res) {
  try {

    const self = await req.state.self();

    const userData = await UserData.find({usersnowflake: self.id})

    if (userData.length === 0) {
      const defaultUser = new UserData({
        _id: uuid.v4(),
        usersnowflake: self.id,
        role: "Member",
        reports: [],
        commands: 0
      })
      await defaultUser.save()
    }

    self['data'] = userData[0];

    res.status(200).json(self);

  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: 500,
      error: 'An error occured try again later!'
    })
  }


}


module.exports = { GetMe }; 