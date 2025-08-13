//Frases mas cortas o pequeñas.

function fraseMasCortas(cadena){
let convertirStringInArra=cadena.split(" ");
let frasePequeña=convertirStringInArra[0];
    for(let i=1; i<convertirStringInArra.length;i++){
        let elem=convertirStringInArra[i];
        if(elem.length<frasePequeña.length){
            frasePequeña=elem;
        }
    }
    return frasePequeña;
}

let cadena="hola somos cadenas ok frases pequeñas";
console.log(fraseMasCortas(cadena));

