'use strict';

if (window.__karma__) {
  var allTestFiles = [];
  var TEST_REGEXP = /spec\.js$/;

  var pathToModule = function(path) {
    return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
  };

  Object.keys(window.__karma__.files).forEach(
    function(file) {
      if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
      }
    }
  );
}

if (window.__karma__) {
  var old = window.__karma__.start;
  window.__karma__.start = function() {
    debugger;

    old.apply(window.__karma__, arguments);
  }
}

require.config(
  {
    paths: {
      angular: 'bower_components/angular/angular',
      angularRoute: 'bower_components/angular-route/angular-route',
      angularMocks: 'bower_components/angular-mocks/angular-mocks',
      text: 'bower_components/requirejs-text/text',
      templates: '_temp/templates'
    },
    shim: {
      'angular': {'exports': 'angular'},
      'angularRoute': ['angular'],
      'angularMocks': {
        deps: ['angular'],
        'exports': 'angular.mock'
      },
      // Each template to be included in tests should be included below.
      'templates': {deps: ['angular']}
    },
    priority: [
      "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : ''
  }
);

require(
  [
    'angular',
    'app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(
      function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['myApp']);
      }
    );
  }
);