const assert = require('assert');
const app = require('../../src/app');

describe('\'medical\' service', () => {
  it('registered the service', () => {
    const service = app.service('medical');

    assert.ok(service, 'Registered the service');
  });
});
