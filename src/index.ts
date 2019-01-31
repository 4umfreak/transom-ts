const Transom = require('@transomjs/transom-core');
const transomServerFx = require('@transomjs/transom-server-functions');
const myApi = require('./myApi');
const opn = require('opn');

const transom = new Transom();
transom.configure(transomServerFx);

// Initialize my TransomJS API metadata.
transom.initialize(myApi).then(function(server: any) {
  // Start the Transom server...
  server.listen(7090, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

  opn('http://localhost:7090/api/v1/fx/hello');
});
