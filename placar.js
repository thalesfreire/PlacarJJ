function adicionar(idAdd) {
	document.getElementById(idAdd).innerHTML = parseInt(document.getElementById(idAdd).innerHTML) + 1;
	
}

function subtrair(idSubtrair) {
	if(parseInt(document.getElementById(idSubtrair).innerHTML) > 0)
		document.getElementById(idSubtrair).innerHTML = parseInt(document.getElementById(idSubtrair).innerHTML) - 1;
}