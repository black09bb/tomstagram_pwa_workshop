'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'sass'
    }
  });

  app.import('node_modules/parse/lib/browser/Parse.js', {
    using: [
      { transformation: 'cjs', as: 'parse' }
    ]
  });

  app.import('node_modules/compressorjs/dist/compressor.common.js', {
    using: [
      { transformation: 'cjs', as: 'compressor' }
    ]
  });

  app.import('node_modules/hammerjs/hammer.min.js', {
    using: [
      { transformation: 'cjs', as: 'hammer' }
    ]
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
