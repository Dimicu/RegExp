function identificarRadio() {

    let coleccion = document.getElementsByName("seleccion");
    console.log(coleccion);
    let color = "";

    for (let i = 0; i < coleccion.length; i++) {
        if (coleccion[i].checked) {
            color = coleccion[i].value;
            console.log(color)
        }

    }
    cambiarColor(color);
    return color;
}

identificarRadio();

function cambiarColor(valorColor) {
    let form = document.getElementsByTagName("form");
    //No necesito la linea de arriba, pero asi puedes ver en consola todas las propiedades
    //del form y cuales quieres tocar.
    form[0].style.backgroundColor = valorColor;
    if (valorColor == "000000") {
        form[0].style.color = "ffffff";
    }

}