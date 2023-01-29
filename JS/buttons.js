//Conectando el código de HTML con el código de JavaScript.

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopy = document.querySelector("#btn-copy");
var botonDelete = document.querySelector("#btn-delete");
var botonPaste = document.querySelector("#btn-paste");


//Dándole funcionalidad al botón de Encriptar.
botonEncriptar.addEventListener("click", function (event) {
		
	event.preventDefault();
	var input = capturarInput();


	//LLamando a la función Encriptar.

	var textoEncriptado = encriptar(input);


	//msg-Output: Palabra Encriptada.

	output(textoEncriptado); 

});
		
//Dándole funcionalidad al botón de Desencriptar.
botonDesencriptar.addEventListener("click", function (event) {
	event.preventDefault();
	var input = capturarInput();

	//LLamando a la función Encriptar.
	var textoDesencriptado = desencriptar(input);


	//msg-Output: Palabra Desencriptada.

	output(textoDesencriptado);

});
	
//botón Copy.

botonCopy.addEventListener("click", function (event) {
	event.preventDefault();

	//LLamando a la función copiar... (Copy Funtion).

	copy();

});

botonDelete.addEventListener("click", function (event) {
	event.preventDefault();


	//LLamando a la función eliminarTexto... (Delete Funtion).

	eliminarTexto();

});
	
botonPaste.addEventListener("click", function (event) {
	event.preventDefault();
	
	//LLamando a la función pegarTexto... (Paste Funtion).

	pegarTexto();

});
	
