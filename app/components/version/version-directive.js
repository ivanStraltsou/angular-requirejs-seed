'use strict';

define(
  [
    'angular',
    'components/interpolation/interpolation'
  ], function(angular) {
    angular.module('myApp.version.version-directive', [])
      .directive(
      'appVersion', ['interpolationService', function(interpolationService) {
        return {
          templateUrl: './components/version/version.html',
          //template: tpl,
          link: function(scope, elm, attrs) {

            elm.children().text(interpolationService.interpolate('test %VERSION% here'));
          }
        };
      }]
    );
  }
);