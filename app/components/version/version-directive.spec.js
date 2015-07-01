/* global describe, it, expect, beforeEach, afterEach, module, inject */
'use strict';

define(
  ['app', 'angularMocks', 'templates'], function(app, mocks) {
    describe(
      'myApp.version module', function() {
        beforeEach(function() {
          module('myApp.version');
          module('templates');
        });

        describe(
          'app-version directive', function() {
            it(
              'should print current version', function() {
                module(
                  function($provide) {
                    $provide.value('version', 'TEST_VER');
                  }
                );
                inject(
                  function($compile, $rootScope) {
                    var element = $compile('<span app-version></span>')($rootScope);

                    $rootScope.$apply();
                    console.log(element.html());
                    expect(element.children().eq(0).text()).toEqual('test TEST_VER here');
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);