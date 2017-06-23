function ConfirmDemo() {
	var mensaje = confirm("¿Desea registrarseña");
	if (mensaje) {
		alert("¡Gracias por aceptar!");
	}else {
		alert("¡Haz cancelado el mensaje!");
	}
}



function confirmacion() {
    var pregunta = confirm("Salir de esta página?")
        if (pregunta){
			alert("Adios!")
			window.location = "https://marcello45.000webhostapp.com/buscador.html";
        }else{
            alert("Gracias por permanecer en la página!")
        }
}