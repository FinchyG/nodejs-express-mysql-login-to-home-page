module.exports = (app) => {
  const loginChecker = require('../controllers/loginChecker.controller.js');

  // Retrieve a single user by username
  app.get('/loginChecker/:username', loginChecker.findOne);

}