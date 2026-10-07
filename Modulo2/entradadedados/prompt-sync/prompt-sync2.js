
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = parseInt(prompt('digite um numero: '));

if (numero === 0) {
    console.log("esse numero é 0.");
} else if (numero % 2 === 0) {
    console.log("É um numero par;")
} else {
    console.log("É um numero ímpar.");
}
