/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var miaplicacion = angular.module("Ferretefacturación", []);

miaplicacion.controller("ControladorFacturacion",function($scope){

  $scope.Sumar = function(){
     var num1 = document.getElementById('PrecioUno').value;
     var num2 = document.getElementById('PrecioDos').value;
     var num3 = document.getElementById('PrecioTres').value;
 	 var suma = parseInt(num1)+parseInt(num2)+parseInt(num3);

 		alert("La suma es: "+suma);
  }

  $scope.Promedio = function(){
  	 var num1 = document.getElementById('PrecioUno').value;
     var num2 = document.getElementById('PrecioDos').value;
     var num3 = document.getElementById('PrecioTres').value;
     var suma = parseInt(num1)+parseInt(num2)+parseInt(num3);
 	 var promedio = parseInt(suma) / 3;
 	 alert("El promedio es: "+promedio);

  }

  $scope.PrecioFinal = function(){
  	var num1 = document.getElementById('PrecioUno').value;
     var num2 = document.getElementById('PrecioDos').value;
     var num3 = document.getElementById('PrecioTres').value;
     var suma = parseInt(num1)+parseInt(num2)+parseInt(num3);
     var SumaConIva = suma * 1.21;
      alert("El precio final es: "+SumaConIva);

  }



});
