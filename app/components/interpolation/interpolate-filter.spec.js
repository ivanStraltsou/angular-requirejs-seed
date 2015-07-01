/* global describe, it, expect, beforeEach, afterEach, module, inject */
'use strict';

define(['app', 'angularMocks'], function(app, mocks) {
	describe('myApp.interpolation module', function() {
		beforeEach(mocks.module('myApp.interpolation'));

		describe('interpolate filter', function() {
			beforeEach(mocks.module(function($provide) {
				$provide.value('version', 'TEST_VER');
			}));

			it('should replace VERSION', inject(function(interpolateFilter) {
				expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
			}));
		});
	});
});
