 'use strict';
var motoApp = angular.module('motoApp',[
'ngRoute',
'motoAppControllers',
'motoAppServices'
]);
motoApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/motos',{
				templateUrl: 'partials/moto-list.html',
				controller: 'ListaMotosCtrl'
			}).
			when('/motos/:motoId',{				
				templateUrl: 'partials/moto-detail.html',
				controller: 'DetalleMotoCtrl'
			}).
			otherwise({
				redirectTo: '/motos'
			});
		}]);