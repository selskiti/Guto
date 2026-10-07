import PromptSync from "prompt-sync";
const prompt = PromptSync()

let notas = [];
let prova1 = parseFloat(prompt("Nota1: "))
let prova2 = parseFloat(prompt("Nota2: "))

notas.push(prova1);
notas.push(prova2);

let media = (notas[0] + notas[1]) / notas.length;

console.log(`A média é: ${media}`)
console.table(notas);

