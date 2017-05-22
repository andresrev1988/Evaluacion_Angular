var motoAppAnimations = angular.module('motoAppAnimations', ['ngAnimate']);

motoAppAnimations.animation('.motos', function() {      
  var remueve = function(element, className) {            
    if(className=="hide"){
      $( element ).slideUp( "slow", function() {
        $( element ).show();
      });    
    }
  }  
  return {    
    removeClass: remueve
  };
});
