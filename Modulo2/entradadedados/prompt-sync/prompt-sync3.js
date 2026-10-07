import PromptSync from "prompt-sync";

const prompt = PromptSync();

let resposta = prompt("Você gosta de café? (sim/não)");


if (resposta !== 'sim' && resposta !== 'nao') {
    console.log("resposta inválida");
} else {
    let gostaDeCafe = resposta === "sim";

    if (gostaDeCafe) {
        console.log("Ele gosta de café!");
    
    } else {
        console.log("Ele não gosta de cafe!");
    }
}