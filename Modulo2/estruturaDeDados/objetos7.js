import PromptSync from "prompt-sync";
const prompt = PromptSync;

const aluno = { nome: "Angelo", nota1: 8, nota2: 9};

const media = (aluno.nota1 + aluno.nota2)/2;

console.log(aluno.nome)
console.log(media)