const btnEncriptar = document.getElementById("btn_encriptar");
const divOculto = document.getElementById("divOculto");
const divVisible = document.getElementById("divVisible");
const textarea = document.getElementById("area_mensaje");
const textDesencriptado = document.getElementById("texto_desencriptado");

const btnDesencriptar = document.getElementById("btn_desencriptar");

const btnCopiar = document.getElementById("btn_copiar");

btnEncriptar.addEventListener("click", function () {
  encriptar();
});

btnDesencriptar.addEventListener("click", function () {
  desencriptar();
});

function encriptar() {
  var text = textarea.value; // Obtener el contenido del primer textarea
  text = text.toLowerCase();
  let caracteresEspeciales = text.match(/^[a-z\n\S]+$/);
  var nuevotexto = "";

  if (text.trim() === "") {
    // Mostrar un mensaje de error
    alert("El textarea está vacío");
    divOculto.style.display = "none";
    divVisible.style.display = "block";
    return;
  } 
  
  if (caracteresEspeciales) {
    // Mostrar un mensaje de error
    alert("No se permiten caracteres especiales en el texto");
    divOculto.style.display = "none";
    divVisible.style.display = "block";
    return;
  }

  divOculto.style.display = "block";
  divVisible.style.display = "none";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "a") {
        nuevotexto += "ai";
      } else if (text[i] === "e") {
        nuevotexto += "enter";
      } else if (text[i] === "i") {
        nuevotexto += "imes";
      } else if (text[i] === "o") {
        nuevotexto += "ober";
      } else if (text[i] === "u") {
        nuevotexto += "ufat";
      } else {
        nuevotexto += text[i];
      }
    }

  textDesencriptado.value = nuevotexto; // Establecer el contenido del segundo textarea con el texto del primer textarea
}

function desencriptar() {
  var text = textarea.value; // Obtener el contenido del primer textarea
  text = text.toLowerCase();
  let caracteresEspeciales = text.match(/[^a-z ]/g);
  var nuevotexto = "";

  if (text.trim() === "") {
    // Mostrar un mensaje de error
    alert("El textarea está vacío");
    divOculto.style.display = "none";
    divVisible.style.display = "block";
    return;
  } 
  
  if (caracteresEspeciales) {
    // Mostrar un mensaje de error
    alert("No se permiten caracteres especiales en el texto");
    divOculto.style.display = "none";
    divVisible.style.display = "block";
    return;
  }

  divOculto.style.display = "block";
  divVisible.style.display = "none";
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + 2) === "ai") {
      nuevotexto += "a";
      i += 1;
    } else if (text.substring(i, i + 5) === "enter") {
      nuevotexto += "e";
      i += 4;
    } else if (text.substring(i, i + 4) === "imes") {
      nuevotexto += "i";
      i += 3;
    } else if (text.substring(i, i + 4) === "ober") {
      nuevotexto += "o";
      i += 3;
    } else if (text.substring(i, i + 4) === "ufat") {
      nuevotexto += "u";
      i += 3;
    } else {
      nuevotexto += text[i];
    }
  }

  textDesencriptado.value = nuevotexto;
}

btnCopiar.addEventListener("click", () => {
  textDesencriptado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
});
