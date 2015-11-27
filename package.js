Package.describe({
  name: 'astrocoders:ganalytics-error-logger',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easiest way to track errors client/server side with google analytics',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Astrocoders/ganalytics-error-logger',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('ganalytics-error-logger.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:ganalytics-error-logger');
  api.addFiles('ganalytics-error-logger-tests.js');
});
