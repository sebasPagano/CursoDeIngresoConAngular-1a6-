/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var miAplicacion = angular.module("FerretePinturas",[]);

miAplicacion.controller("ControladorPinturas", function($scope){

	$scope.FahrenheitCentigrados = function()
	{
		var temp=document.getElementById('Temperatura').value;
	var f=32;
	var C=(parseInt(temp)-parseInt(f))/1.8;
	alert(C);
	
	}

	$scope.CentigradosFahrenheit = function()
	{
		var temp=document.getElementById('Temperatura').value;
	var f=parseInt(temp)*1.8+32;
	alert(f);

	}

})