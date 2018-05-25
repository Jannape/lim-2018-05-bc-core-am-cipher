document.getElementById("boton").addEventListener('click', function () {
    let offset = document.getElementById("offset").value;
    let mensaje = document.getElementById("mensaje").value;
    const rsptaUno = cipher.encode(mensaje, offset);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = rsptaUno;
});
document.getElementById("boton2").addEventListener('click', function () {
    let offset = document.getElementById("offset").value;
    let mensaje = document.getElementById("mensaje").value;
    const rsptaDos = cipher.decode(mensaje, offset);
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = rsptaDos;
});

