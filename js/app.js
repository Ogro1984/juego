
var valordados=0;
var a,b,c,d;
var flipflop=0;
//funcion para generar numeros aleatorios del 1 al 4
function dados(){
valordados=Math.floor(Math.random() * 4) + 1;
return valordados;
}

//// cartel que cambia de color//
window.onload = function() {
setInterval(cambiarFondo, 500);// 0.5 segundos
llenadoincial();
}

function cambiarFondo() {
  if (flipflop==0){$(".main-titulo").css("color","#DCFF0E");flipflop=1;}
  else{$(".main-titulo").css("color","white");flipflop=0;}
}

function llenadoincial(){

a=1;
$(".imgg").css("width","94px")
}

var myVar;
function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");}

$(".btn-reinicio").click(function(){
a=1;})

/*
$( "#up" ).click(function() {
  $( "#img1" ).animate({ bottom: "-=50px" }, "slow" );
});

$( "#down" ).click(function(){
  $( "#img1" ).animate({ bottom: "+=50px" }, "slow" );
});
*/
$( ".sortable" ).sortable();
$( ".sortable" ).disableSelection();
