/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var miAplicacion = angular.module("FerreteIluminacion",[]);

miAplicacion.controller("ControladorIluminacion",function($scope){

	$scope.CalcularPrecio = function()
	{
		 var lamparas;
  var descuento;
  var precio;
  var marca;
  var preciofinal;
  var IIBB;

  lamparas=document.getElementById('Cantidad').value;
  marca=document.getElementById('Marca').value;
  precio=lamparas*35;

  switch(lamparas)

  {

    case "1":
    {

      {descuento=1; }
    break;}

   case "2":
    {
    {descuento=1;}
     break;}

    case "3":
    {
      if(marca=="ArgentinaLuz")
      {descuento=0.85;}

      
      if(marca=="FelipeLamparas")
      {descuento=0.90;}

      else  if(marca!="ArgentinaLuz" && marca!="FelipeLamparas")

      {descuento=0.95;}
       break;
    }
    case "4":
    {
    if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
    {descuento=0.75;}

      else 
     {descuento=0.80;}
     break;

    }
    case "5":
    {

    if(marca=="ArgentinaLuz")
    {descuento=0.60;}

     else if(marca!="ArgentinaLuz")
     {descuento=0.70;}
     break; }

  default:

   {
    if(lamparas>=6)
    {descuento=0.5;}
   break;
   } 

  }

preciofinal=descuento*precio;


  if(preciofinal>=120)
  {

    IIBB=preciofinal*0.1;

   alert("Usted pago "+IIBB+ " de IIBB" );

  }
  

   document.getElementById('precioDescuento').value=preciofinal;
     alert(preciofinal);

		
	}

});

