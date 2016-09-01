/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;


var miAplicacion= angular.module("AdivinaElNumero2", []);


miAplicacion.controller("controladorADV2", function($scope){


	$scope.comenzar = function(){

	contadorIntentos=0;
	
	document.getElementById('intentos').value=contadorIntentos;
    numeroSecreto=Math.floor((Math.random() * 100) + 1);
    
	}

	$scope.verificar = function(){

		 document.getElementById('intentos').value=contadorIntentos;
		 var numeroingresado=document.getElementById('numero').value;

		if(numeroingresado == numeroSecreto)
		{
			alert("Has Ganado");
		}
		else if(numeroingresado > numeroSecreto )
		{
			alert("te has pasado");
		}
		else
		{
			alert("te falta.. ");
		}

		if (numeroSecreto==numeroingresado && contadorIntentos==1)
		alert("Usted es psiquico ");

		if(numeroSecreto==numeroingresado && contadorIntentos==2)
			alert("excelente percepción");

		if(numeroSecreto==numeroingresado && contadorIntentos==3)
			alert("Esto es suerte ");


		if(numeroSecreto==numeroingresado && contadorIntentos==4)
			alert("Excelente tecnica ");

		if(numeroSecreto==numeroingresado && contadorIntentos==5)
			alert("Usted esta en la media ");

		if(numeroSecreto==numeroingresado && contadorIntentos>6 && contadorIntentos<10)
			alert("Falta tecnica ");

		if(numeroSecreto==numeroingresado && contadorIntentos>10)
			alert("Afortunado en el amor ");	
			

		contadorIntentos++;
	}
});
