import PromptSync from "prompt-sync";
const prompt = PromptSync

let temperaturaAgua = 90

while (temperaturaAgua < 100) {
    console.log(`A temperatura esta em ${temperaturaAgua} graus. Aquecendo...`)

    temperaturaAgua += 2;
}