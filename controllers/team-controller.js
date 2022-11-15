const { Teams } = require('../models');

const teamController = {
  // the functions will go in here as methods
  getTeamById({ params}, res) {
    Teams.findOne({ _id: params.id })
    .then(dbTeamData => {
        if (!dbTeamData) {
            res.status(404).json({ message: 'No team found with this ID'});
            return;
        }
        res.json(dbTeamData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
  }
};
//maybe make a put to manually update?
//I think I will have to manually put players ids on a team from this API?
module.exports = teamController;