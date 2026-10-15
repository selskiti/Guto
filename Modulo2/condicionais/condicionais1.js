import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Sua idade: "));
if (idade > 20) {
console.log("Acesso permitido.");
} 
else (idade < 20); {
console.log("Acesso negado: menor de idade.");
}
