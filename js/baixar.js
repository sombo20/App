yu=function(id){return document.getElementById(id);}
if(localStorage){
if(localStorage['visitas']==undefined){
localStorage['visitas']=0;
}var n=parseInt(localStorage['visitas']);
localStorage['visitas']=1+n;
var num=localStorage['visitas'];
var mensaje=  num ;
yu('visitas').innerHTML=mensaje;
}