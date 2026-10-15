import PromptSync from "prompt-sync";
const prompt = PromptSync;

// aqui usa entrada de dados, trocando palavras para numeros, por isso usa number?

let numero = parseInt(prompt("Digite um numero: "));

// numero % 2 === 0 // par
// numero % 2 !== 0 // par


while (numero >= 2) {

    numero = numero - 2;
    
}

// para que serve as condicionais mesmo e quando eu sei que tem que usar só if ou else ou as duas ? 
//para que usamos o sinal de igual repetidamente? ===
// por que eu preciso usar $?

if (numero === 0) { // true ou false verdadeiro === "true"
console.log('O numero ${numeroOriginal} é PAR')
} else {
console.log('O numero ${numeroOriginal} é IMPAR')

}