/*                                          VALIDACIONES
    El codigo fue reutilizado de las practicas anteriores de login aunque le hicieron breves modificaciones
    Para este trabajo
*/




//=======================================VALIDACIÓN DE CAMPOS VACIOS=============================================
export const estaVacio = (texto) =>{

    //Primer validación de la función: comprobar que la cadena que le llegue no esté vacía
    return texto.trim() === "";
}


//=======================================VALIDACIÓN DE CORREO=============================================
export const validarCorreo = (correo) =>{

    //Linea para establecer la estructura de los correos permitidos, en este primer ejemplo solo permite correos del ito
    const estructura = /^[0-9]+@itoaxaca\.edu\.mx$/;

    //se compara el correo con la extructura admitida por la expresion regular, si no se cumple retorna false
    if(estructura.test(correo)==false)return false;

    //si las condiciones anteriores no se cumplen retornamos un true indicando que el correo es valido
    return true;
}


//====================================VALIDACIÓN DE CONTRASEÑA=====================================
/*
En vez de usar expresiones regulares como en los casos anteriores pensé en un metodo que fuera más entendible
pero que siguiera los requisitos para la contraseña, las comparaciones que se hicieron fueron con base en
el codigo ASCII de cada numero, si el caracter de la posicion i (que hace referencia a una posicion de la
contraseña dentro del for) equivale a un caracter de los que se piden, entonces su variable que registra 
la existencia de ese caracter cambia a true dando a entender que si forma parte del password.
*/

export const validarPassword = (password) => {
    if (typeof password !== "string") return false;
    if (password.length < 8) return false;

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        const posicion = password[i];   // el carácter en la posición i

        if (posicion >= "A" && posicion <= "Z") {
            tieneMayuscula = true;
        } else if (posicion >= "a" && posicion <= "z") {
            tieneMinuscula = true;
        } else if (posicion >= "0" && posicion <= "9") {
            tieneNumero = true;
        } else if (posicion === " ") {
            return false;             
        } else {
            tieneEspecial = true;    
        }
    }
    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
};





//====================================VALIDAR USERNAME=====================================
/*
Creamos la función de validar un nombre de usuario de minimo 5 caracteres, que contenga al menos una mayúscula, una minúscula y un número.
*/

export function validarUsername(nombreUsuario) {

    /*IDEA ORIGINAL
    Los regex sirven mucho pero me interesó más hallar la solución de otra manera
        const regex = /^[a-zA-Z0-9_]{4,15}$/;
        return regex.test(nombreUsuario);
    */

    if (typeof nombreUsuario !== "string") return false;

    if (nombreUsuario.length < 5) return false;
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;

    for (let i = 0; i < nombreUsuario.length; i++) {
        const posicion = nombreUsuario[i];   // el carácter en la posición i

        //Uso de codigo ASCII para saber si cumple contiene los caracteres específicos
        if (posicion >= "A" && posicion <= "Z") {
            tieneMayuscula = true;
        } else if (posicion >= "a" && posicion <= "z") {
            tieneMinuscula = true;
        } else if (posicion >= "0" && posicion <= "9") {
            tieneNumero = true;
        } else if (posicion === " ") {          //Si el usuario incluyó un espacio en su nombre directamente retorna false
            return false;             
        } 
    }
    //console.log("Si hace esto")
    return tieneMayuscula && tieneMinuscula && tieneNumero;
};


export function confirmarPassword(password, confirmacion) {
  return password === confirmacion;
}