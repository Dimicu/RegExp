class Envio {
    constructor(fec, emp, cli, gr, comp, cta) {
        this.fecha = fec;
        this.empleado = emp;
        this.cliente = cli;
        this.gramos = gr;
        this.composicion = comp;
        this.cuentaUsa = cta;
    }
}


/**--------------------------------------------------------------------------------TOMAR LOS DATOS -------------------------------------------------------------------*/

function tomarDatos() {
    let datos = document.getElementsByTagName("input");

    for (let i = 0; i < datos.length; i++) {
        //console.log(datos[i].value);
    }
    return datos;
}

/**-------------------------------------------------------------------------------VARIABLES GLOBALES------------------------------------------------------------------*/

let coleccionDatos = tomarDatos();
let arrayEnvios = [];

/**--------------------------------------------------------------------------------VALIDAR LOS DATOS -------------------------------------------------------------------*/

function validarFecha(elementos) {
    let fecha = elementos["fec"].value;
    let regFecha = /\d{2}\/\d{2}\/\d{4}/;
    let mensaje = "";
    let validacion = false;
    if (regFecha.test(fecha)) {
        mensaje = "Fecha Correcta";
        validacion = true;
    } else {
        mensaje = "Error al introducir campo fecha" + "\n" +
            "Compruebe que usa el formato dd/mm/aaaa";
    }
    console.log(mensaje);
    return validacion;
}

function validarEmpleado(elementos) {
    let emp = elementos["emp"].value;
    let regEmp = /[A-Z]{2}\W{1}\d{4}/;
    let mensaje = "";
    let validacion = false;
    if (regEmp.test(emp)) {
        mensaje = "Nº Empleado Correcto";
        validacion = true;
    } else {
        mensaje = "El numero de empleado no es correcto" +
            "Introduzca un numero siguiendo el ejemplo AA$1234";
    }
    console.log(mensaje);
    return validacion;
}

function validarCliente(elementos) {
    let cli = elementos["cli"].value;
    let regDest = /^[A-Z]{2,3}_[a-zA-Z]+\:\d{4}/;
    let mensaje = "";
    let validacion = false;
    if (regDest.test(cli)) {
        mensaje = "Nº Cliente Correcto";
        validacion = true;
    } else {
        mensaje = "Error en Nº Cliente: Siga el ejemplo NY_NewYork:1234"
    }
    console.log(mensaje);
    return validacion;
}

function validarGramos(elementos) {
    let g = elementos["grs"].value;
    let regGram = /(?=[1-4][0-9]{3})|5000/; //ARREGLADO ANTES ESTABA let regGram = /[1-4][0-9]{3}|5000/ Y TRAGABA TODO QUE FUERA MAS DE 4 CIFRAS
    let mensaje = "";
    let validacion = false;
    if (regGram.test(g)) {
        mensaje = "Nº gramos correcto";
        validacion = true;
    }
    else {
        mensaje = "Introduzca un peso entre 1000 y 5000 gramos";
    }
    console.log(mensaje);
    return validacion;
}



function validarComposicion(elementos) {
    let comp = elementos["comp"].value;
    let regComp = /^[0-9]{1,4}g([A-Z]{1,2}[0-9]?){2}/;
    let mensaje = "";
    let validacion = false;

    if (regComp.test(comp)) {
        mensaje = "La composicion quimica es correcta";
        validacion = true;
    } else {
        mensaje = "Introduzca una composicion quimica adecuada: ej.: 200gC3OH7";
    }
    console.log(mensaje);
    return validacion;

}

function validarCuenta(elementos) {
    let cta = elementos["cta"].value;
    let abc = "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
    let numA = abc.indexOf(cta[0]);
    let numB = abc.indexOf(cta[1]);
    let mensaje = "";
    let validacion = false;
    let sumLetras = numA + numB;

    let digitos = parseInt(cta.substring(2, 4));

    if (sumLetras == digitos) {
        mensaje = "Los digitos son correctos";
        validacion = true;

    } else {
        console.log("Los digitos no coinciden con las letras: Introduzca un Nº Cuenta valido")
    }
    console.log(mensaje);
    return validacion;
}



/**-------------------------------------------------------------------------------EJECUCION -------------------------------------------------------------------*/

function validar() {
    validarFecha(coleccionDatos);
    validarEmpleado(coleccionDatos);
    validarCliente(coleccionDatos);
    validarGramos(coleccionDatos);
    validarComposicion(coleccionDatos);
    validarCuenta(coleccionDatos);

}
function crearEnvio(valor1, valor2, valor3, valor4, valor5, valor6) {

    if (valor1 && valor2 && valor3 && valor4 && valor5 && valor6) {

        let fecha = coleccionDatos["fec"];
        let empleado = coleccionDatos["emp"];
        let cliente = coleccionDatos["cli"];
        let gramos = coleccionDatos["grs"];
        let composicion = coleccionDatos["comp"];
        let cuentaUsa = coleccionDatos["cta"];

        let envio = new Envio(fecha, empleado, cliente, gramos, composicion, cuentaUsa);

        arrayEnvios.push(envio);
    }
}

function registrar() {
    crearEnvio(validarFecha(coleccionDatos), validarEmpleado(coleccionDatos), validarCliente(coleccionDatos), validarGramos(coleccionDatos), validarComposicion(coleccionDatos), validarCuenta(coleccionDatos))
}


function limpiarCampos() {
    for (let i = 0; i < coleccionDatos.length; i++) {
        coleccionDatos[i] = "";

    }
}


/**--------------------------------------------------------------------------------EXPRESIONES REGULARES-------------------------------------------------------------------*/
/*


let regFecha = /\d{2}\/\d{2}\/\d{4}/;
let regEmp = /[A-Z]{2}\W{1}\d{4}/;
let regDest = /^[A-Z]{2,3}_[a-zA-Z]+\:\d{4}/;
let regGram = /[1-4][0-9]{3}|5000/;
let regComp = /^[0-9]{1,4}g([A-Z]{1,2}[0-9]?){2}/;
let regNumCuenta = /[A-NO-Z]{2}[0-9]{2}\-[0-9]{12}\-[0-9]{2}/;

*/

