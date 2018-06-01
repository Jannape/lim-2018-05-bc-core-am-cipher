
document.getElementById('boton').addEventListener('click', function () {
    let offset = parseInt(document.getElementById('offset').value);
    let string = document.getElementById("mensaje").value;


    document.getElementById('respuesta').innerHTML = (cipher.createCipherWithOffset(offset)).encode(string);



});

document.getElementById('boton2').addEventListener('click', function () {
    let offset = parseInt(document.getElementById('offset').value);
    let string = document.getElementById('mensaje').value;
    document.getElementById('respuesta').innerHTML = (cipher.createCipherWithOffset(offset)).decode(string);



});

