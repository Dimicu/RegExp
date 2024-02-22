function calcularMedia() {
    let coleccion = document.getElementsByTagName("select");
    let suma = 0;
    let media = 0;

    for (let i = 0; i < coleccion.length; i++) {
        suma += parseInt(coleccion[i].value);

    }
    media = suma / coleccion.length;

    document.getElementById("mensaje").innerHTML = "La media del alumno es:" + media;

}