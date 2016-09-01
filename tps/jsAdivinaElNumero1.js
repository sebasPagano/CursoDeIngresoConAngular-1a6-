
var miAplicacion= angular.module("AdivinaElNumero", []);


miAplicacion.controller("controladorADV1", function($scope){


	var contador = 0;
	var numeroSecreto;

	$scope.comenzar = function(){
		document.getElementById('intentos').value = contador;
		numeroSecreto = Math.floor((Math.random()*100)+1);

	
	}

	$scope.verificar = function(){

	
		document.getElementById('intentos').value = contador;
		var numeroIngresado = document.getElementById('numero').value;

		if(numeroIngresado == numeroSecreto)
		{
			alert("Has Ganado");
		}
		else if(numeroIngresado > numeroSecreto )
		{
			alert("te has pasado");
		}
		else
		{
			alert("te falta.. ");
		}

		contador++;

	
	}
});

