function tomarHobbies() {

    let frase = "";
    let oracion = "Mis hobbies favoritos son: ";
    let coleccion = document.getElementsByTagName("input");
    for (let i = 0; i < coleccion.length; i++) {
        if (coleccion[i].checked) {
            frase += coleccion[i].defaultValue + ",";
        }
    }

    document.getElementById("mensaje").innerHTML = oracion + frase;
}