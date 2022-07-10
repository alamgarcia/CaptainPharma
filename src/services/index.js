const users = require('./users/users.service.js');
const inventary = require('./inventary/inventary.service.js');
const medical = require('./medical/medical.service.js');
const recipe = require('./recipe/recipe.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(inventary);
  app.configure(medical);
  app.configure(recipe);
};
