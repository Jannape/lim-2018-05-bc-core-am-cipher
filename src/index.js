let string, offset;
document.getElementById("boton").addEventListener('click', function () {
    offset = document.getElementById("offset").value;
    string = document.getElementById("mensaje").value;
    let rsptaUno = cipher.encode(offset, string);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = rsptaUno;
});

document.getElementById("boton2").addEventListener('click', function () {
    offset = document.getElementById("offset").value;
    string = document.getElementById("mensaje").value;
    let rsptaDos = cipher.decode(offset, string);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = rsptaDos;
});

