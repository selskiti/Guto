import PromptSync from "prompt-sync";
const prompt = PromptSync

let somaPares = 0;
let somaImpares = 0;

let totalPares = 0;
let totalImpares = 0;

let mediaPares = 0;
let mediaImpares = 0;

for (let i = 0; i<= 999; i++) {
    if (i % 2 === 0) {
        somaPares = somaPares + i;
        totalPares = totalPares + 1;
        console.log(`O número ${i} é par .`)
} else { 
          somaImpares = somaImpares + i;
          somaImpares = totalImpares + 1;
          console.log(`O número ${i} é ímpar. `);         
        }
}

mediaPares = somaPares / totalPares;
mediaImpares = somaImpares / totalImpares;

if (somaPares > somaImpares) {
    console.log("A soma dos valores pares é maior.");
} else if (somaImpares >  somaPares) {
    console.log("A soma dos valores impares é maior.");
} else {
    console.log("A soma dos valores são iguais.");
}
console.log("==== Pares ====");
console.log(`Quantidade: ${totalPares}`);
console.log(`Soma: ${somaPares}`);
console.log(`média: ${mediaPares}`);

console.log("==== Impares ====");
console.log(`Quantidade: ${totalImpares}`);
console.log(`Soma: ${somaImpares}`);
console.log(`média: ${mediaImpares}`);

