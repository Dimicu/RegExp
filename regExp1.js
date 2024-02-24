/**    1. Determina las expresiones regulares que permitan validar los siguientes campos:
    a. Código postal 
    b. Matrícula automóvil española 
    c. Número de teléfono fijo español: 
    d. Número de teléfono móvil español: 
    e. Fecha (DD/MM/YY, DD/MM/YYYY, DD-MM-YY, DD-MM-YYYY)
    f. DNI (Ej 34569900A)  
    g. Nombre. (Se permitirá nombres compuestos como “José María” y la abreviatura Mª)
    h. Apellidos (Ejemplo válidos: Martínez Pérez, Martínez de la Era, Martínez del Olmo)
 
    i. Números de teléfono (+código del país, numero). 
        ◦ El código del país pueden ser 2 o 3 digitos. (ver https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales para más información
        ◦ El número tendrá entre 7 y 9 dígitos

            j. E-mail
 */


let regCodPost = /^[0-9]{5}$]/;
let regMatricula = /^[0-9]{4}[A-Z]{3}$/;
let regNumFijo = /^\+34(9|8)[0-9]{8}$/;
let regNUmMovil = /^\+34(6|7)[0-9]{8}$/;
let regFecha = /^[0-9]{2}(\/|-)[0-9]{2}(\/|-)([0-9]{2}|[0-9]{4})/
let regDNI = /^[0-9]{8}[A-Z]{1}$/;
let regNombre = /^(Mª)|([a-zA-Z ])+$/;
let regApe = /^[a-zA-Z ]+$/;
let regTelefono = /^\+[0-9]{2,3}-[0-9]{7,9}$/;
let regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z.]+\.((com)|(es)|(gal))$/;