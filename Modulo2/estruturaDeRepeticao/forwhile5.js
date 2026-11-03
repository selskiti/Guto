import PromptSync from "prompt-sync";
const prompt = PromptSync();


let capacidadeMaxima = 1000;
let pesoTotal = 0;
let quantidadeCaixas = 0;

while (true) {

    let pesoCaixa = Number(prompt("Digite o peso da caixa (kg):"));

    if (pesoTotal + pesoCaixa > capacidadeMaxima) {
        console.log("ALERTA! Capacidade máxima do caminhão atingida!");
        break;
    }

    pesoTotal += pesoCaixa;
    quantidadeCaixas++;

    console.log("Caixa adicionada com sucesso!");
    console.log("Peso atual: " + pesoTotal + " kg");
}

console.log("--------------------------");
console.log("CARREGAMENTO FINALIZADO");
console.log("Peso total: " + pesoTotal + " kg");
console.log("Quantidade de caixas: " + quantidadeCaixas);