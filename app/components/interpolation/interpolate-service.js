'use strict';

define(
  ['angular'], function(angular) {
    angular.module('myApp.interpolation.interpolate-service', [])
      .service(
      'interpolationService', ['$filter', function($filter) {

        this.interpolate = function(value) {
          return $filter('interpolate')(value);
        };
      }]
    );
  }
);