var historyApp = angular.module('HISTORYAPP', ['ngRoute']);


historyApp.config(['$routeProvider', function($routeProvider,$locationProvider) {
  $routeProvider.
	when('/midterm1', { templateUrl: 'templates/midterm1.html', controller: mainCtrl }).
    otherwise({ redirectTo: '/midterm1' });
}]);

//******************************************
// Rootscope Setup
//********************************************
historyApp.run(function ($rootScope) {
    
});