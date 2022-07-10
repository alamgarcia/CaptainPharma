const { Service } = require('feathers-mongodb');

exports.Inventary = class Inventary extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('inventary');
    });
  }
};
