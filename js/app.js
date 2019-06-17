
var valordados=0;
var a,b,c,d;
var flipflop=0;
var contaux=0;


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

function parpadeo(objeto){
        for (var i=0;i<6;i++){
         $(objeto).fadeToggle(500);
        
              }
        
              $(objeto).fadeOut(500);
            }

function macheaiden (){

var coordenadasorigen = 11;
var coordenadasfinal= 77;
var MygenerArray=[];
for (var i=11;i<78;i++){
  //genero matriz de comparacion vertical 
  var vobj_1= $("#img"+(i-1).toString()).attr("src");
  var vobj_2= $("#img"+(i-2).toString()).attr("src");
  var vobj_3= $("#img"+(i-3).toString()).attr('src');
  var vobj_4= $("#img"+(i-4).toString()).attr('src');
  var vobj_5= $("#img"+(i-5).toString()).attr('src');
  var vobj_6= $("#img"+(i-6).toString()).attr('src');
  var vobj1= $("#img"+i.toString()).attr('src');
  var vobj2= $("#img"+(i+1).toString()).attr('src');
  var vobj3= $("#img"+(i+2).toString()).attr('src');
  var vobj4= $("#img"+(i+3).toString()).attr('src');
  var vobj5= $("#img"+(i+4).toString()).attr('src');
  var vobj6= $("#img"+(i+5).toString()).attr('src');
  var vobj7= $("#img"+(i+6).toString()).attr('src');
  
//genero matriz de comparacion horizonzal
  var hobj_1= $("#img"+(i-10).toString()).attr('src');
  var hobj_2= $("#img"+(i-20).toString()).attr('src');
  var hobj_3= $("#img"+(i-30).toString()).attr('src');
  var hobj_4= $("#img"+(i-40).toString()).attr('src');
  var hobj_5= $("#img"+(i-50).toString()).attr('src');
  var hobj_6= $("#img"+(i-60).toString()).attr('src');
  var hobj1= $("#img"+i.toString()).attr('src');
  var hobj2= $("#img"+(i+10).toString()).attr('src');
  var hobj3= $("#img"+(i+20).toString()).attr('src');
  var hobj4= $("#img"+(i+30).toString()).attr('src');
  var hobj5= $("#img"+(i+40).toString()).attr('src');
  var hobj6= $("#img"+(i+50).toString()).attr('src');
  var hobj7= $("#img"+(i+60).toString()).attr('src');
  var vec=[];
  
  //comparacion vertical positiva(comparo cada elemento con el que le sigue si es igual continua la comparacion y se carga el vector de resultados)
  if (vobj1==vobj2){
        if (vobj2==vobj3){
          vec.push(("#img"+(i).toString()));
          vec.push(("#img"+(i+1).toString()));
          vec.push(("#img"+(i+2).toString()));
          if (vobj3==vobj4){
            vec.push(("#img"+(i+3).toString()));
            if (vobj4==vobj5){
              vec.push(("#img"+(i+4).toString()));
              if (vobj5==vobj6){
                vec.push(("#img"+(i+5).toString()));
                if (vobj6==vobj7){
                  vec.push(("#img"+(i+6).toString()));
                }}}}}}
//comparacion vertical negativa (comparo cada elemento con el que esta anterior a el si es igual continua la comparacion y se carga el vector de resultados)
  //  if (vobj1==vobj_1){
  //          if (vobj_1==vobj_2){
  //            vec.push(("#img"+(i).toString()));
  //            vec.push(("#img"+(i-1).toString()));
  //            vec.push(("#img"+(i-2).toString()));
  //            if (vobj_2==vobj_3){
  //              vec.push(("#img"+(i-3).toString()));
  //              if (vobj_3==vobj_4){
  //                vec.push(("#img"+(i-4).toString()));
  //                if (vobj_4==vobj_5){
  //                  vec.push(("#img"+(i-5).toString()));
  //                  if (vobj_5==vobj_6){
  //                    vec.push(("#img"+(i-6).toString()));
  //                  }}}}}}
//comparacion horizontal positiva(comparo cada elemento con el que le sigue si es igual continua la comparacion y se carga el vector de resultados)    
     if (hobj1==hobj2){
            if (hobj2==hobj3){
              vec.push(("#img"+(i).toString()));
              vec.push(("#img"+(i+10).toString()));
              vec.push(("#img"+(i+20).toString()));
              if (hobj3==hobj4){
                vec.push(("#img"+(i+30).toString()));
                if (hobj4==hobj5){
                  vec.push(("#img"+(i+40).toString()));
                  if (hobj5==hobj6){
                    vec.push(("#img"+(i+50).toString()));
                    if (hobj6==hobj7){
                      vec.push(("#img"+(i+60).toString()));
                    }}}}}}

//comparacion horizontal negativa(comparo cada elemento con el que le sigue si es igual continua la comparacion y se carga el vector de resultados)    
  //  if (hobj1==hobj_1){
  //    if (hobj_1==hobj_2){
  //      vec.push(("#img"+(i).toString()));
  //      vec.push(("#img"+(i-10).toString()));
  //      vec.push(("#img"+(i-20).toString()));
  //      if (hobj_2==hobj_3){
  //        vec.push(("#img"+(i-30).toString()));
  //        if (hobj_3==hobj_4){
  //          vec.push(("#img"+(i-40).toString()));
  //          if (hobj_4==hobj_5){
  //            vec.push(("#img"+(i-50).toString()));
  //            if (hobj_5==hobj_6){
  //              vec.push(("#img"+(i-60).toString()));
  //            }}}}}}


//console.log(vec.toString());


MygenerArray=MygenerArray.concat(vec);
console.log(vec.toString());


if (i==17){i=20;}
else if (i==27){i=30;}
else if (i==37){i=40;}
else if (i==47){i=50;}
else if (i==57){i=60;}
else if (i==67){i=70;}


}
//funcion para limpiar valores repetidos 
Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

MygenerArray=MygenerArray.unique();
var MygenerArray2=[];
//parseo el tipo de nuevo a un array generico para poder acceder a los metodos del tipo array
MygenerArray2=MygenerArray2.concat(MygenerArray);

//verifico si array de coincidencias esta vacio si no lo esta debo desaparecer los elemntos de la pantalla y volver a llenarlos con elementos random

if (MygenerArray2.length!=0){
for (var i=0; i<(MygenerArray2.length+1);i++){
  parpadeo(MygenerArray2[i]);

}
  


}

}




function cambiarFondo() {
  if (flipflop==0){$(".main-titulo").css("color","#DCFF0E");flipflop=1;}
  else{$(".main-titulo").css("color","white");flipflop=0;}
}

function llenadoincial(){
//asigno valores aleatorios y cambio las imagenes 
$(".imgg").css("width","94px");
      for (var i=11;i<78;i++){
            var random=dados().toString();
            var id='#img'+i.toString();
            var attr = "image\\"+random+'.png';
              $(id).attr('src',attr);

          }




}


function myFunction() {
  myVar = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  alert("Hello!");}

$(".btn-reinicio").click(function(){
  macheaiden();
})



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
