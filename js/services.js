'use strict';
var motoAppServices = angular.module('motoAppServices', ['ngResource']); 
motoAppServices.factory('Moto', ['$resource',
  function($resource){  	
  	console.log('motos/:motoId.json');
    return $resource('motos/:motoId.json', {}, {
      query: {method:'GET', params:{motoId:'motos'}, isArray:true}
    });
  }]);
