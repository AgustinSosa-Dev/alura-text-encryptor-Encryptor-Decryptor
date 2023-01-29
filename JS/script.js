
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function validador(input) {  //Solo letras minúsculas.
	let vacio = '';
    //Se añaden los carácteres válidos. /Minúsculas y espacios en blanco).
	
    let filtro = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z ';

    for (var i=0; i<input.length; i++)
       if (filtro.indexOf(input.charAt(i)) != -1) 
	     vacio += input.charAt(i);
    return vacio;
}

function encriptar(input) {

	titulo2.innerHTML = "Mensaje encriptado"
	vocales = input.split('');

	for (var i = 0; i < vocales.length; i++) {

		if (vocales[i] == "a") {

			vocales.splice(i, 1, ("ai"));


		} else if (vocales[i] == "e") {

			vocales.splice(i, 1, ("enter"));

		} else if (vocales[i] == "i") {

			vocales.splice(i, 1, ("imes"));


		} else if (vocales[i] == "o") {

			vocales.splice(i, 1, ("ober"));


		} else if (vocales[i] == "u") {

			vocales.splice(i, 1, ("ufat"));

		}

	}
	return vocales.join("");

}

function desencriptar(input){
	titulo2.innerHTML = "Mensaje desencriptado"
	vocalesEncriptadas = input.split('');
   for(var i = 0; i < vocalesEncriptadas.length; i++){
        if((vocalesEncriptadas[i]+vocalesEncriptadas[i+1]) == "ai"){
            vocalesEncriptadas.splice(i, 2, "a");
        } else if ((vocalesEncriptadas[i]+vocalesEncriptadas[i+1]+vocalesEncriptadas[i+2]+vocalesEncriptadas[i+3]+vocalesEncriptadas[i+4]) == "enter"){
            vocalesEncriptadas.splice(i, 5, "e");
        } else if ((vocalesEncriptadas[i]+vocalesEncriptadas[i+1]+vocalesEncriptadas[i+2]+vocalesEncriptadas[i+3]) == "imes"){
            vocalesEncriptadas.splice(i, 4, "i");
        } else if ((vocalesEncriptadas[i]+vocalesEncriptadas[i+1]+vocalesEncriptadas[i+2]+vocalesEncriptadas[i+3]) == "ober"){
            vocalesEncriptadas.splice(i, 4, "o");
        } else if ((vocalesEncriptadas[i]+vocalesEncriptadas[i+1]+vocalesEncriptadas[i+2]+vocalesEncriptadas[i+3]) == "ufat"){
            vocalesEncriptadas.splice(i, 4, "u");
        }
    }   
    return vocalesEncriptadas.join("");
}

function copy () {
	var copiarTexto = document.querySelector("#msg-output");
	copiarTexto.select();
	document.execCommand("copy");

}

function eliminarTexto () {

	var borrarTexto = document.querySelector("#msg-output");

	borrarTexto.select();
	document.execCommand("delete");

}

function pegarTexto () {

	var pegarTexto = document.querySelector("#msg-input");

	document.execCommand("paste");

}

