
var valordados=0;
var a,b,c,d;
var flipflop=0;
var contaux=0;


//funcion para generar numeros aleatorios del 1 al 4
function dados(){
valordados=Math.floor(Math.random() * 4) + 1;
return valordados;
}

//// envento de carga inicial//
window.onload = function() {
setInterval(cambiarFondo, 500);// 0.5 segundos
asignavalues();
}

//funcion para hacer parpadear elemento y luego desaparzca y luego los borra para que se vuelvan a generar y rellenar los espacios vacios

function parpadeo(objeto){
        for (var i=0;i<6;i++){
         $(objeto).fadeToggle(500);
        
              }
        
              $(objeto).fadeOut(500);
              
            }

function generaobjetonueto(objeto){}


// funcion que detecta borra iguales y devuelve un vector con los elementos que han sido borrados


function macheaiden (){


var MygenerArray=[];
for (var i=11;i<78;i++){
  //genero matriz de comparacion vertical 
  
  var vobj1= $("#img"+i.toString()).attr('src');
  var vobj2= $("#img"+(i+1).toString()).attr('src');
  var vobj3= $("#img"+(i+2).toString()).attr('src');
  var vobj4= $("#img"+(i+3).toString()).attr('src');
  var vobj5= $("#img"+(i+4).toString()).attr('src');
  var vobj6= $("#img"+(i+5).toString()).attr('src');
  var vobj7= $("#img"+(i+6).toString()).attr('src');
  
//genero matriz de comparacion horizonzal
  
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



MygenerArray=MygenerArray.concat(vec);



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
//parseo el tipo de array viejo  de nuevo a un array generico para poder acceder a los metodos del tipo array
MygenerArray2=MygenerArray2.concat(MygenerArray);

//verifico si el array de coincidencias esta vacio si no lo esta debo desaparecer los elemntos de la pantalla y volver a llenarlos con elementos random
//tengo que mejorar la forma que se lama la funcion pedorra esta para borrar los elementos
//hacer curso javascript
if (MygenerArray2.length!=0){
  
(MygenerArray22,borralementos)=>{  for (var i=0; i<(MygenerArray22.length+1);i++){
 
  parpadeo(MygenerArray22[i]);
  borralementos(MygenerArray22);
}}
  
function borralementos(MygenerArray222=[]){
  for (var i=0; i<(MygenerArray222.length+1);i++){
  var random=dados().toString();
  var id='#img'+i.toString();
   var attr = "image\\"+random+'.png';
  
   $(id).attr('src',attr);}
  

}



}

return MygenerArray2;


}






//funcion que asigna figuras al hazar solo en los lugares vacios
function asignavaluesblancspaces(){
  for (var i=11;i<78;i++){
    var random=dados().toString();
    var id='#img'+i.toString();
    if ($(id).attr('src')==undefined){
    var attr = "image\\"+random+'.png';
      $(id).attr('src',attr);}
}}


//funcion que asigna figuras aleatorias para llenado inicial 

function asignavalues() { 

  $(".imgg").css("width","94px");
  for (var i=11;i<78;i++){
        var random=dados().toString();
        var id='#img'+i.toString();
        var attr = "image\\"+random+'.png';
          $(id).attr('src',attr);

      }


 }

 //parpadea fondo del cartel match game
function cambiarFondo() {
  if (flipflop==0){$(".main-titulo").css("color","#DCFF0E");flipflop=1;}
  else{$(".main-titulo").css("color","white");flipflop=0;}
}

//funcion para calcular el valor de las figuras que se repitieron y ya no estan luego rellena con figuras random al final
function rellenolugares(vectorcoinci){
 var cont=[0,0,0,0,0,0,0,0];
 var desplazamiento=0;
 
 for (var i=0;i<vectorcoinci.length+1;i++ ){

   if (vectorcoinci[i]=='#img11'||vectorcoinci[i]=='#img12'||vectorcoinci[i]=='#img13'||vectorcoinci[i]=='#img14'||vectorcoinci[i]=='#img15'||vectorcoinci[i]=='#img16'||vectorcoinci[i]=='#img17'){
        
      for(var t1=11;t1<18;t1++){
          if (vectorcoinci[i]=='#img'+t1.toString()){cont[1]=cont[1]+1;}

        }}
   if (vectorcoinci[i]=='#img21'||vectorcoinci[i]=='#img22'||vectorcoinci[i]=='#img23'||vectorcoinci[i]=='#img24'||vectorcoinci[i]=='#img25'||vectorcoinci[i]=='#img26'||vectorcoinci[i]=='#img27'){
          for(var t2=21;t2<28;t2++){
            if (vectorcoinci[i]=='#img'+t2.toString()){cont[2]=cont[2]+1;}
  
          } }      
   if (vectorcoinci[i]=='#img31'||vectorcoinci[i]=='#img32'||vectorcoinci[i]=='#img33'||vectorcoinci[i]=='#img34'||vectorcoinci[i]=='#img35'||vectorcoinci[i]=='#img36'||vectorcoinci[i]=='#img37'){
         for(var t3=31;t3<38;t3++){
            if (vectorcoinci[i]=='#img'+t3.toString()){cont[3]=cont[3]+1;}
    
            }}
  if (vectorcoinci[i]=='#img41'||vectorcoinci[i]=='#img42'||vectorcoinci[i]=='#img43'||vectorcoinci[i]=='#img44'||vectorcoinci[i]=='#img45'||vectorcoinci[i]=='#img46'||vectorcoinci[i]=='#img47'){
         for(var t4=41;t4<48;t4++){
          if (vectorcoinci[i]=='#img'+t4.toString()){cont[4]=cont[4]+1;}
         
     }   }   
  if (vectorcoinci[i]=='#img51'||vectorcoinci[i]=='#img52'||vectorcoinci[i]=='#img53'||vectorcoinci[i]=='#img54'||vectorcoinci[i]=='#img55'||vectorcoinci[i]=='#img56'||vectorcoinci[i]=='#img57'){
         for(var t5=51;t5<58;t5++){
          if (vectorcoinci[i]=='#img'+t5.toString()){cont[5]=cont[5]+1;}
                  
               }             }   
   if (vectorcoinci[i]=='#img61'||vectorcoinci[i]=='#img62'||vectorcoinci[i]=='#img63'||vectorcoinci[i]=='#img64'||vectorcoinci[i]=='#img65'||vectorcoinci[i]=='#img66'||vectorcoinci[i]=='#img67'){
          
          for(var t6=61;t6<68;t6++){
           if (vectorcoinci[i]=='#img'+t6.toString()){cont[6]=cont[6]+1;}
                             
                              }}                          
      if (vectorcoinci[i]=='#img71'||vectorcoinci[i]=='#img72'||vectorcoinci[i]=='#img73'||vectorcoinci[i]=='#img74'||vectorcoinci[i]=='#img75'||vectorcoinci[i]=='#img76'||vectorcoinci[i]=='#img77'){
           for(var t7=71;t7<78;t7++){
            if (vectorcoinci[i]=='#img'+t7.toString()){cont[7]=cont[7]+1;}
             }   }
            



  }   
            
            
 for (var r=1;r<8;r++){
      for (var q=1; q<cont[r]+1;q++){
        var random1=dados().toString();
        var id1='#img'+((r*10)+q);
        var attr1 = "image\\"+random1+'.png';
          $(id1).attr('src',attr1);
        

      }

 }    

 


}




//funcion para sincronismo espera 4100 para continuar el programa 

function waitinirq(vectorconici) {
  myVar = setTimeout(rellenolugares(vectorconici), 4100);
}

function alertFunc() {
  alert("Hello!");}


/// detecto el inicio del juego
$(".btn-reinicio").click(function(){
  
  vectorconici=[];

  vectorconici= macheaiden();
  // if (vectorconici[0] != 0){
  // waitinirq(vectorconici);}
    


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
