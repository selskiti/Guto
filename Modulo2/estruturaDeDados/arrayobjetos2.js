import PromptSync from "prompt-sync";
const prompt = PromptSync ();

let nome = prompt("Digite o nome do cachorro: ");
let raca = prompt("Digite a raca do cachorro: ");
let idade = prompt("Digite a idade do cachorro: ");

let paciente = {};

paciente.nome = nome;
paciente.raca = raca;
paciente.idade = idade;

if( paciente.idade >= 8) {
console.log(`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina`)

} else { console.log('Paciente na faixa de idade regular')
}

console.log(paciente);





