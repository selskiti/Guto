import PromptSync from "prompt-sync";
const prompt = PromptSync();

const senhaCorreta = "1002";
let tentativa = prompt("Digite a senha para acessar o cofre:");

while (tentativa !== senhaCorreta){
    console.log(" Acesso negado: Senha Incorreta");

    tentativa = prompt("Digite novamente a senha: ")}


console.log("cofre liberado com sucesso:");

