window.cipher = {
  encode: (offset, string) => {
    offset = offset % 26;
    let arreglo = new Array();
    arreglo = string.split("");
    let pCifrada = "";
    let pCifradas = "";
    for (let i = 0; i < string.length; i++) {
      let posAsci = arreglo[i].charCodeAt(0);
      if (arreglo[i] === " ") {
        pCifradas += " ";
      }
      if (posAsci >= 65 && posAsci <= 90) {
        let pos = 65;
        pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos + offset) % 26 + pos);
      }
      if (posAsci >= 97 && posAsci <= 122) {
        let pos = 97;
        pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos + offset) % 26 + pos);

      }
    }
    return pCifradas;

  },

  decode: (offset, string) => {

    let pCifrada = "";
    let pCifradas = "";
    offset = offset % 26;
    let arreglo = new Array();
    arreglo = string.split("");
    for (let i = 0; i < string.length; i++) {
      let posAsci = arreglo[i].charCodeAt(0);
      if (arreglo[i] === " ") {
        pCifradas += " ";
      }
      if (posAsci >= 65 && posAsci <= 90) {
        let pos = 65;
        let condicion = (arreglo[i].charCodeAt(0) - pos) - offset;

        if (condicion < 0) {
          pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0) + 26 - offset)));
        } else {
          pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos - offset) % 26 + pos);
        }
      }
      if (posAsci >= 97 && posAsci <= 122) {
        let pos = 97;
        let condicion = (arreglo[i].charCodeAt(0) - pos) - offset;

        if (condicion < 0) {
          pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0) + 26 - offset)));
        } else {
          pCifradas += pCifrada + String.fromCharCode(((arreglo[i].charCodeAt(0)) - pos - offset) % 26 + pos);
        }
      }



    }
    return pCifradas;

  },





};


