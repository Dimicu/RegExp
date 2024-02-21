/*    • Fecha de creación: obligatorio y con formato dd/mm/aaaa.
    • Empleado: será un nombre en clave formado por dos letras en mayúscula, un símbolo
     y cuatro dígitos (ej. WW$1234)
    • Destinatario: estará formado por dos o tres letras mayúsculas correspondientes al estado, 
    un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 
    digitos (ej. NM_NewYork:1234).
    • Gramos: será un número del 100 al 5000.
    • Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de una o 
    dos letras seguidas o no de un número. (ej. 200gC3OH7) 
    • Número de cuenta de EEUU: supongamos que un número de cuenta estadounidense tiene 
    el siguiente formato:

    • Dos letras mayúsculas (no se incluye la Ñ) (A=0,B=1,C=2…).
    • Dos dígitos: debe corresponderse con la suma de la primera letra y la segunda:
     en caso de que sea menor que 10 se pone el 0 delante.
    • Un guión.
    • Doce dígitos de cuenta.
    • Un guión.
    • Dos dígitos de control
    • Si el número está correcto se colocará en un campo de texto al lado del anterior,
     pero sin guiones: solamente los números y las letras. */


function validarDatos() {
    let fecha = document.getElementsByTagName("fec")
    let empleado = document.getElementsByTagName("emp")
    let destinatario = document.getElementsByTagName("des")
    let gramos = document.getElementsByTagName("grs")
    let composicion = document.getElementsByTagName("comp")
    let cta = document.getElementsByTagName("cta")
    console.log(fecha);
}


regFecha = /\d{2}\/\d{2}\/\d{4}/;
regEmp = /[A-Z]{2}\W{1}\d{4}/;
regDest = /^[A-Z]{2,3}_[a-zA-Z]+\:\d{4}/;
regGram = /[1-4][0-9]{3}|5000/;
regComp = /^[0-9]{1,4}g([A-Z]{1,2}[0-9]?){2}/;
regNumCuenta = /[A-NO-Z]{2}[0-9]{2}\-[0-9]{12}\-[0-9]{2}/;

