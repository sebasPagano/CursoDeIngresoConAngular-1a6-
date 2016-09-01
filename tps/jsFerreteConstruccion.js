/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var miAplicacion = angular.module("FerreteConstruccion", []);

miAplicacion.controller("ControladorConstruccion", function($scope){

	$scope.Rectangulo = function()
	{
		var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var terreno=(parseInt(largo*2) +parseInt(ancho*2))*3;
	alert("Se necesecita "+terreno+" metros de alambre");

	}
	$scope.Circulo = function()
	{
		var radio=document.getElementById('Radio').value;
	var area=((radio*radio)*3.14)*3;
	alert("Se necesita "+area);
		
	}
	$scope.Materiales = function()
	{
		   var largo=document.getElementById('Largo').value;
   var ancho=document.getElementById('Ancho').value;
   var cemento=2;
   var cal=3;
   var metro=parseInt((largo*ancho)*cemento);
   var metro2=parseInt((largo*ancho)*cal);
   alert("Usted necesitara "+metro+ " de cemento y "+metro2+" de cal.");
	}


});


