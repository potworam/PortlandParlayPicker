const { Teams } = require('../models');

const teamController = {
  // the functions will go in here as methods
  getAllTeams(req, res) {
    Teams.find({})
      .then(dbTeamsData => res.json(dbTeamsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getTeamsById({ params}, res) {
    Teams.findOne({ _id: params.id })
    .then(dbTeamsData => {
        if (!dbTeamsData) {
            res.status(404).json({ message: 'No team found with this ID'});
            return;
        }
        res.json(dbTeamsData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
  },
  createTeams({body}, res){
    Teams.create(body)
    .then(dbTeamsData => res.json(dbTeamsData))
    .catch(err => res.status(400).json(err));
  },
  updateTeams({ params, body }, res) {
    Teams.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbTeamsData => {
        if (!dbTeamsData) {
          res.status(404).json({ message: 'No team found with this id!' });
          return;
        }
        res.json(dbTeamsData);
      })
      .catch(err => res.status(400).json(err));
  },
  deleteTeams({ params }, res) {
    Teams.findOneAndDelete({ _id: params.id })
      .then(dbTeamsData => {
        if (!dbTeamsData) {
          res.status(404).json({ message: 'No Team found with this id!' });
          return;
        }
        res.json(dbTeamsData);
      })
      .catch(err => res.status(400).json(err));
  }
};
//maybe make a put to manually update?
//I think I will have to manually put players ids on a team from this API?
module.exports = teamController;