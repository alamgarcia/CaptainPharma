const assert = require('assert');
const app = require('../../src/app');

describe('\'inventary\' service', () => {
  it('registered the service', () => {
    const service = app.service('inventary');

    assert.ok(service, 'Registered the service');
  });
});
