function printHello(){
	var num = 100;
	var out = "Hello World";
	var div = document.getElementById("printOut");
	
	div.innerHTML = "";
	
	for(var i=1; i<= num; i++){
		div.innerHTML += "<div>" + out + "</div>";
	}
}

function printGoodbye(){
	var num = 100;
	var out = "Goodbye World";
	var div = document.getElementById("printOut");
	
	div.innerHTML = "";
	
	for(var i=1; i<= num; i++){
		div.innerHTML += "<div>" + out + "</div>";
	}
}
