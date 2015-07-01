'use strict';

define(
  ['angular'], function(angular) {
    angular.module('myApp.interpolation.interpolate-filter', [])
      .filter(
      'interpolate', ['version', function(version) {
        return function(text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
      }]
    );
  }
);