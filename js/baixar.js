var id = function (id){
    return document.getElementById(id);
  }
  
 
	if(localStorage){
		if(localStorage['baixa']==undefined){
			localStorage['baixa']=0;
}
	var n=parseInt(localStorage['baixa']);localStorage['visitas']=1+n;
	var num=localStorage['baixa'];

var mensagem= num ;
id("visitas").innerHTML = mensagem
	}




