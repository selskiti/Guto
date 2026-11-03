import PromptSync from "prompt-sync";
const prompt = PromptSync();

let total = 0;
let valor;
let resposta;

do {
    valor = Number(prompt("Digite o valor do item: R$ "));

    total += valor;

    resposta = prompt("Deseja adicionar mais algum item? (sim/nao): ");

} while (resposta === "sim");

console.log(`O valor total da compra é: R$ ${total}`);