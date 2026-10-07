import PromptSync from "prompt-sync";
const prompt = PromptSync

let nome = prompt("Qual é o seu nome?")
let idade = parseFloat(prompt("Qual a sua idade? "));

const anoNascimento = anoAtual - idade;

console.log(`Nome: ${nome}`);
console.log()
