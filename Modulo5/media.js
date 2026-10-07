import numeros from "./numeros.js";

function calcularMedia() {
let soma = 0;

if (numeros.length === 0) {
    return " A lista esta vazia.";
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;
return media;
}

export default calcularMedia;