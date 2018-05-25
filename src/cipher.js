window.cipher = {
  encode: encode,
  decode: decode
};

function encode(mensaje, offset) {
  // console.log('soy encode');
  offset = offset % 94;
  let arreglo = new Array();
  arreglo = mensaje.split("");
  let pCifrada = "";
  let pCifradas = "";
  for (let i = 0; i < mensaje.length; i++) {
    let posAsci = arreglo[i].charCodeAt(0);

    if (posAsci >= 32 && posAsci <= 126) {
      let pos = 32;
      pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos + offset) % 94 + pos);

    }
  }
  return pCifradas;
}

function decode(mensaje, offset) {
  let pCifrada = "";
  let pCifradas = "";
  offset = offset % 94;
  let arreglo = new Array();
  arreglo = mensaje.split("");
  for (let i = 0; i < mensaje.length; i++) {
    let posAsci = arreglo[i].charCodeAt(0);
    if (posAsci >= 32 && posAsci <= 126) {
      let pos = 32;
      let condicion = (arreglo[i].charCodeAt(0) - pos - offset);

      if (condicion < 0) {
        pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0) + 94 - offset)));
      } else {
        pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos - offset) % 94 + pos);
      }
    }

  }
  return pCifradas;

}