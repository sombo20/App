
 
	if(localStorage){
		if(localStorage['baixa']==undefined){
			localStorage['baixa']=0;
}
	var n=parseInt(localStorage['baixa']);localStorage['baixa']=1+n;
	var num=localStorage['baixa'];

var mensagens= num ;
document.getElementById("visitas").innerHTML = mensagens;
	}




