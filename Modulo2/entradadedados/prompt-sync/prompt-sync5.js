import PromptSync from "prompt-sync";
const prompt = PromptSync()

let nome = prompt("Qual é seu nome? ");
let idade = parseInt (prompt("Qual é sua idade?"));

if (idade >= 18) {
    console.log(`${nome}, você já é maior de idade.`);
}else {
        let quantoFalta = 18 - idade
        console.log(`${nome}, você vai ser maior de idade em ${quantoFalta} anos.`);
    }
