// Initializes the `medical` service on path `/medical`
const { Medical } = require('./medical.class');
const hooks = require('./medical.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/medical', new Medical(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medical');

  service.hooks(hooks);
};
