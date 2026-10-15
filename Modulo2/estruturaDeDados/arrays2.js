import PromptSync from "prompt-sync";
const prompt = PromptSync;

const fila = [ "Ana", "Bruno"];

fila.push("Carla");
fila.unshift("Diego");
fila.shift("primeiro da fila")

console.log(fila);