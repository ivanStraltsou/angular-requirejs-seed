'use strict';

define(
  ['angular', 'components/version/version-directive', 'components/interpolation/interpolation'],
  function(angular, versionDirective, interpolateFilter) {
    angular.module(
      'myApp.version', [
        'myApp.version.version-directive',
        'myApp.interpolation'
      ]
    )
      .value('version', '0.3');
  }
);