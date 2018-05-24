document.getElementById("boton").addEventListener('click', function(){
    let offset=document.getElementById("offset").value;
    let mensaje=document.getElementById("mensaje").value;
    cipher.encode(mensaje,offset);
    document.getElementById("respuesta").innerHTML=pCifradas;
   
});