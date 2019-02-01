require('dotenv').config();

const transomServerFx = require('@transomjs/transom-server-functions');
const myApi = require('./myApi');

const x = require('@transomjs/transom-core');

import TransomCore from '@transomjs/transom-core';

// const reg: PocketRegistry = 
import PocketRegistry from 'pocket-registry';

const reg: PocketRegistry = new PocketRegistry();

reg.register = {
  yellow: '#005599'
};


console.log(`Register includes yellow: ${reg.get('yellow', 'nil')}`);

const keys : Array<keyof String> = reg.keys;

console.log(`Register includes keys: ${keys.join(', ')}`);

const transom = new TransomCore();
transom.configure(transomServerFx);

// transom.configure(transomServerFx, {})
// const foo = transom.registry;

// Initialize my TransomJS API metadata.
transom.initialize(myApi).then(function(server: any) {
  // Start the Transom server...
  server.listen(7090, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

  console.log('http://localhost:7090/api/v1/fx/hello');
});
