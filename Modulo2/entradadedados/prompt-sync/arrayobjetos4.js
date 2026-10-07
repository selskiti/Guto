import PromptSync from "prompt-sync";
const prompt = PromptSync();

const estacao = { id: "sensor", local: "laboratorio", temperaturas:[]};


let temperatura1 = prompt("Qual temperatura matutina: ");
let temperatura2 = prompt("Qual temperatura vespertino: ");
let temperatura3 = prompt("Qual temperatura noturno: ");

estacao.temperaturas.push(parseFloat(temperatura1), parseFloat(temperatura2), parseFloat(temperatura3));


let media =(estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2])/estacao.temperaturas.length 
console.log(media);

if( media > 35){
    estacao.alerta = true;
    
    console.log(`PERIGO: Média de temperatura extrema ${media} graus detectada no ${estacao.local}`)}

else if( media <= 35){
    estacao.alerta = false
console.log("Temperaturas dentro da normalidade")}

console.log(estacao);

    

    






















