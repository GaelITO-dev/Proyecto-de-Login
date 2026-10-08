import { validarCorreo, soloLetras, validarLongitud, validarPassword, calcularEdad,MayorDeEdad,validarUsername, confirmarPassword  } from './utileria.js';
import { crearModal } from './modal.js';

        const formulario = document.getElementById("formulario");
        const inputUser = document.getElementById("username");
        const inputemail = document.getElementById("email");
        const inputdesc = document.getElementById("desc");
        const inputNum = document.getElementById("numero");
        const inputContra = document.getElementById("contra");
        const inputContra2 = document.getElementById("contra2");
        const inputFecha=document.getElementById("edad");

        const mensajeError1 = document.getElementById("mensaje-error1");
        const mensajeError2 = document.getElementById("mensaje-error2");
        const mensajeError3 = document.getElementById("mensaje-error3");
        const mensajeError4 = document.getElementById("mensaje-error4");
        const mensajeError5 = document.getElementById("mensaje-error5");
        const mensajeError6 = document.getElementById("mensaje-error6");
        const mensajeError7 = document.getElementById("mensaje-error7");


        const modalEdad = crearModal({
            titulo: "Advertencia de edad",
            mensaje: "Debes ser mayor de 18 años para continuar.",
            textoBoton: "Entendido"
        });

        /*=================================SEGUIMIENTO DEL FORMULARIO=============================================*/
        formulario.addEventListener("submit", evento => {

            let todoValido = true;

            
            //================CAMPOS VACÍOS=======================
            if (inputemail.value === '') {
                mensajeError1.style.color = "red";
                mensajeError1.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
            if (inputdesc.value === '') {
                mensajeError2.style.color = "red";
                mensajeError2.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
            if (inputNum.value === '') {
                mensajeError3.style.color = "red";
                mensajeError3.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
            if (inputFecha.value === '') {
                mensajeError4.style.color = "red";
                mensajeError4.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
            if (inputContra.value === '') {
                mensajeError5.style.color = "red";
                mensajeError5.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
             if (inputContra2.value === '') {
                mensajeError7.style.color = "red";
                mensajeError7.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }
             if (inputUser.value === '') {
                mensajeError6.style.color = "red";
                mensajeError6.textContent = "Es necesario llenar el campo";
                todoValido = false;
            }

            console.log("Por aqui si llega")

            //================VALIDACIÓN DEL USERNAME=======================
            if (inputUser.value !== '' && validarUsername(inputUser.value) == false) {
                mensajeError6.style.color = "red";
                mensajeError6.textContent = "Por favor escribe un username válido";
                todoValido = false;
            } else if (inputUser.value !== '') {
                mensajeError6.textContent = "";
            }

            
            //================VALIDACIÓN DEL CORREO=======================
            if (inputemail.value !== '' && validarCorreo(inputemail.value) == false) {
                mensajeError1.style.color = "red";
                mensajeError1.textContent = "Escribe un email válido";
                todoValido = false;
            } else if (inputemail.value !== '') {
                mensajeError1.textContent = "";
            }

            //===================VALIDACIÓN DE TEXTO=======================
            if (inputdesc.value !== '' && soloLetras(inputdesc.value) == false) {
                mensajeError2.style.color = "red";
                mensajeError2.textContent = "Por favor, escribe una descripción válida";
                todoValido = false;
            } else if (inputdesc.value !== '') {
                mensajeError2.textContent = "";
            }

            //===================VALIDACIÓN DE NUMERO=======================
            if (inputNum.value !== '' && validarLongitud(inputNum.value, 10) == false) {
                mensajeError3.style.color = "red";
                mensajeError3.textContent = "Por favor, escribe un numero válido";
                todoValido = false;
            } else if (inputNum.value !== '') {
                mensajeError3.textContent = "";
            }

            //===================VALIDACIÓN DE CONTRASEÑA=======================
            if (inputContra.value !== '' && validarPassword(inputContra.value) == false) {
                mensajeError5.style.color = "red";
                mensajeError5.textContent = "La contraseña no cumple con lo requerido";
                todoValido = false;
            } else if (inputContra.value !== '') {
                mensajeError5.textContent = "";
            }

            //==========VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA==============
            if (inputContra.value !== ''&&inputContra2.value !== '' && confirmarPassword(inputContra.value,inputContra2.value) == false) {
                mensajeError7.style.color = "red";
                mensajeError7.textContent = "La contraseña no es la misma";
                todoValido = false;
            } else if (inputContra.value !== ''&&inputContra2.value !== '') {
                mensajeError7.textContent = "";
            }

             //===================VALIDACIÓN DE EDAD=======================
            if (inputFecha.value !== '' && MayorDeEdad(inputFecha.value) == false) {
                let anioscum=calcularEdad(inputFecha.value);
                modalEdad.mostrar("tu edad es de: "+ anioscum +" años cumplidos");
                /*
                Pruebas primarias:
                mensajeError4.style.color = "red";
                mensajeError4.textContent = "Eres muy joven";
                */
                todoValido = false;
            } else if (inputFecha.value !== '') {
                mensajeError4.textContent = "";
                modalEdad.ocultar();
            }

            //===================RESULTADO FINAL=======================
            if (todoValido == false) {
                evento.preventDefault(); // solo cancelamos el envío si algo falló
            } else {
                //Originalmente se pensó para que tuviera un alert
                alert("Exito");
                // sin preventDefault aquí, el formulario sigue su curso normal y se envía
            }

        });