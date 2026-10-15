import PromptSync from "prompt-sync";
const prompt = PromptSync();


let saldo = Number(prompt("Saldo: "));
let preco = Number(prompt("Preço do produto: "));
let negativado = prompt("Está negativado? (sim/nao): ");
if ( saldo >= 350 && negativado !== "sim" ) {
console.log("Compra aprovada!");
} else {
console.log("Compra negada.");
}


