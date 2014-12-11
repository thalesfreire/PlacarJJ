function relogio(){

	
	//criamos a variavel objeto momentoAtual, que contera a data atual
	var momentoAtual = new Date(); 
	
	//Pegamos em variaveis separadas, hora, minuto e segundo
    var hora = momentoAtual.getHours(); 
    var minuto = 0;
    var segundo = 0;
	
	
	if(segundo <=9 )
	{
	   segundo = "0"+segundo;	
	};
	if(minuto <=9 )
	{
	   minuto = "0"+minuto;	
	};
	if(hora <=9 )
	{
	   hora = "0"+hora;	
	};
	 
	
	// pegamos dia, mes e ano do objeto momento atual
	var dia = momentoAtual.getDate();
	var mes = momentoAtual.getMonth();
	var ano = momentoAtual.getFullYear();
	var comp = null;
	
	switch(mes)
	{
		case 0:
		mes = "Janeiro";
		break;
		case 1:
		mes = "Fevereiro";
		break;
		case 2:
		mes = "Mar�o";
		break;
		case 3:
		mes = "Abril";
		break;
		case 4:
		mes = "Maio";
		break;
		case 5:
		mes = "Junho";
		break;
		case 6:
		mes = "Julho";
		break;
		case 7:
		mes = "Agosto";
		break;
		case 8:
		mes = "Setembro";
		break;
		case 9:
		mes = "Outubro";
		break;
		case 10:
		mes = "Novembro";
		break;
		case 11:
		mes = "Dezembro";
		break;
	}


	if(hora>=6 && hora <12)
	{
		comp='Bom Dia, ';   
	}
	else if(hora>=12 && hora <18)
	{
		comp='Boa Tarde, ';   
	}
	else if(hora>=18 && hora <24)
	{
		comp='Boa Noite, ';   
	}
	else if(hora>=24 && hora <6)
	{
		comp='Boa Madrugada, ';   
	};


   // contatenamos a string do relogio
    //horaImprimivel =comp+ dia + " de " + mes + " de " + ano  +" | "+ hora +":"+minuto+":"+segundo;
	
	horaImprimivel = minuto+":"+segundo;
	
	//utilizando jquery exibimos na div de id relogio o relogio
    $("#relogio").html(horaImprimivel);
	
    
	setTimeout("relogio()",1000)
}



$(function() {
	relogio();
});