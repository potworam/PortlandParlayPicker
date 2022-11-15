const router = require('express').Router();
const{
    getAllTeams,
    getTeamsById,
    createTeams,
    updateTeams,
    deleteTeams,
}=require('../../controllers/team-controller.js');
// Set up GET all and POST at /api/team
router
  .route('/')
  .get(getAllTeams)
  .post(createTeams);

// Set up GET one, PUT, and DELETE at /api/team/:id
router
  .route('/:id')
  .get(getTeamsById)
  .put(updateTeams)
  .delete(deleteTeams);

module.exports = router;