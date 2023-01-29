var input = document.querySelector("#msg-input");
input.focus();

//Capturando al input.
function capturarInput() {
  input = document.querySelector("#msg-input");
  return input.value;
}

//Mostrando el output.
function output(textoEncriptado) {
  document.querySelector("#msg-output").value = textoEncriptado;
}
