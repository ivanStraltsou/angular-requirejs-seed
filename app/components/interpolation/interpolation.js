'use strict';

define(['angular', 'components/interpolation/interpolate-service', 'components/interpolation/interpolate-filter'],
	function(angular) {

		angular.module('myApp.interpolation', [
		  'myApp.interpolation.interpolate-filter',
		  'myApp.interpolation.interpolate-service'
		]);
});