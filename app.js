document.addEventListener("DOMContentLoaded", function () {
  /* const form = document.getElementById("formulario"); */
  const sendButton = document.getElementById("submit");
  const errorAlert = document.querySelector(".alert.alert-danger");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // DETIENE EL ENVIO DEL FORMULARIO

    // VALIDAR CAMPOS
    const numeroTarjeta = document.getElementById("numeroTarjeta");
    const cvc = document.getElementById("cvc");
    const cantidad = document.getElementById("cantidad");
    const nombre = document.getElementById("inputName");
    const apellido = document.getElementById("inputLastName");
    const ciudad = document.getElementById("inputCity");
    const estado = document.getElementById("inputState");
    const codPostal = document.getElementById("inputZip");
    const mensaje = document.getElementById("message");

    let isValid = true;

    //NUMERO TARJETA
    if (!/^\d{16}$/.test(numeroTarjeta.value)) {
        numeroTarjeta.style.backgroundColor = "#ffcccc";
        document.getElementById("numeroTarjetaError").textContent = "Por favor, ingrese un número de tarjeta válido";
        isValid = false;
      } else {
        numeroTarjeta.style.backgroundColor = "initial";
        document.getElementById("numeroTarjetaError").textContent = ""; // BORRAR EL MENSAJE DE ERROR SI ES VALIDO
      }

    //CVC
    if (!/^\d{3}$/.test(cvc.value)) {
      cvc.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      cvc.style.backgroundColor = "initial";
    }

    //AMOUNT O CANTIDAD
    if (!/^\d+(\.\d{1,2})?$/.test(cantidad.value)) {
      cantidad.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      cantidad.style.backgroundColor = "initial";
    }

    //CAMPO DEL NOMBRE Y APELLIOD
    if (
      (nombre.value !== "" && apellido.value !== "") ||
      !/^[a-zA-Z]+$/.test(nombre.value) ||
      !/^[a-zA-Z]+$/.test(apellido.value)
    ) {
      nombre.style.backgroundColor = "#ffcccc";
      apellido.style.backgroundColor = "#ffcccc";
    } else {
      nombre.style.backgroundColor = "initial";
      apellido.style.backgroundColor = "initial";
    }

    //CIUDAD
    if (ciudad.value === "" || !/^[a-zA-Z]+$/.test(ciudad.value)) {
      ciudad.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      ciudad.style.backgroundColor = "initial";
    }

    //ESTADO
    if (estado.value === "" || !/^[a-zA-Z]+$/.test(estado.value)) {
      estado.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      estado.style.backgroundColor = "initial";
    }

    //POSTAL CODE
    if (codPostal.value === "" || !/^\d{8}$/.test(codPostal.value)) {
      codPostal.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      codPostal.style.backgroundColor = "initial";
    }

    //SECCION DEL MENSAJE
    if (mensaje.value === "" || !/^[a-zA-Z]+$/.test(mensaje.value)) {
      mensaje.style.backgroundColor = "#ffcccc";
      isValid = false;
    } else {
      mensaje.style.backgroundColor = "initial";
    }

    // MOSTRAR/OCULTAR LA ALERTA
    if (isValid) {
      errorAlert.classList.add("visually-hidden");
    } else {
      errorAlert.classList.remove("visually-hidden");
    }
  });
});
