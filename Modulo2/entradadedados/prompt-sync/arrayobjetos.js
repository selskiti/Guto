import PromptSync from "prompt-sync";
const prompt = PromptSync;

const listaAlunos = ["Angelo", "Bruna"];

let novoAluno = "Augusto";

listaAlunos.push(novoAluno);

if(listaAlunos.length === 3) {
    
console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`)

}

