import PromptSync from "prompt-sync";
const prompt = PromptSync();


let temp = 30;
if (temp >= 0) {
console.log("Acima de zero");
} else if (temp >= 30) {
console.log("Quente"); // nunca executa
} else {
console.log("Frio");
}



