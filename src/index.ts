import TransomCore from '@transomjs/transom-core';
// import PocketRegistry from 'pocket-registry';

const transomServerFx = require('@transomjs/transom-server-functions');
const myApi = require('./myApi');

// const reg: PocketRegistry = new PocketRegistry();

// reg.set("foo", { bar: { baz: 123 }});
// console.log(reg.has("foo.bar")); // prints: true
// console.log(JSON.stringify(reg.get("foo.bar"))); // prints: {"baz": 123}
// // reg.get("foo.bar.xyz"); // throws an error
// console.log(reg.get("foo.bar.xyz", "donut")); // prints: donut
// reg.remove("foo.garbage.truck"); // doesn't do anything, because foo.garbage doesn't exist.

const transom = new TransomCore();
transom.configure(transomServerFx);

// const foo = transom.registry;

// Initialize my TransomJS API metadata.
transom.initialize(myApi).then(function(server: any) {
  // Start the Transom server...
  server.listen(7090, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

  console.log('http://localhost:7090/api/v1/fx/hello');
});
