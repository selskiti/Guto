import PromptSync from "prompt-sync";
const prompt = PromptSync();

let temperaturaAtual = parseFloat(prompt("Digite o valor da temperatura inicial em Cº"));

console.log("Iniciando calibração dos sensores");

for(let passo = 1; passo <= 5; passo++){
temperaturaAtual += 2;

    console.log(`Leitura${passo}: ${temperaturaAtual}`)
}

console.log("Calibração concluída com sucesso!")