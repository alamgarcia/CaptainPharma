const { Service } = require('feathers-mongodb');

exports.Medical = class Medical extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('medical');
    });
  }
};
