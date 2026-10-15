import PromptSync from "prompt-sync";
const prompt = PromptSync;

const carro = {
modelo: "Uno",
motor: { combustivel: "flex", potencia: 85 },
opcionais: ["ar", "trava", "vidro"],
};
// TODO: imprima o combustível do motor
// TODO: imprima o segundo opcional
console.log(carro.motor.combustivel); // flex
console.log(carro.opcionais[1]); // trava