function opera(op){
	switch(op){
		case 1: document.getElementById("res").value=0;
			break;
		case 2: document.getElementById("res").value=parseFloat(document.getElementById("num1").value)+parseFloat(document.getElementById("num2").value);
			break;
		case 3: document.getElementById("res").value=parseFloat(document.getElementById("num1").value)-parseFloat(document.getElementById("num2").value);
			break;
		case 4: document.getElementById("res").value=parseFloat(document.getElementById("num1").value)*parseFloat(document.getElementById("num2").value);
			break;
		case 5: document.getElementById("res").value=parseFloat(document.getElementById("num1").value)/parseFloat(document.getElementById("num2").value);
			break;
	}
}