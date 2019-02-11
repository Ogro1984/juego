
var valordados=0;
var a,b,c,d;
var valores = [0];

function dados(){
valordados=Math.floor(Math.random() * 4) + 1;
return valordados;
}



$("#putisio").click(function(){

console.log("putimos");
})


$("#botonputo").click(function(){
var a=dados();
var b=dados();
var c=dados();
var d=dados();
console.log(a,b,c,d);
})
//// cartel que cambia de color//
var flipflop=0;

window.onload = function() {
setInterval(cambiarFondo, 500);// 5 segundos
}

function cambiarFondo() {
  if (flipflop==0){$(".main-titulo").css("color","yellow");flipflop=1;}
  else{$(".main-titulo").css("color","white");flipflop=0;}
}
