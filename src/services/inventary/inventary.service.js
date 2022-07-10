// Initializes the `inventary` service on path `/inventary`
const { Inventary } = require('./inventary.class');
const hooks = require('./inventary.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/inventary', new Inventary(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('inventary');

  service.hooks(hooks);
};
