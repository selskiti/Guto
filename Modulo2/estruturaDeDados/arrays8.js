import PromptSync from "prompt-sync";
const prompt = PromptSync;

const tarefas = []

const quantidade = Number(prompt("Quantas tarefas? "))

for(i = 0; i > tarefas.length; i++){

    const nomeTarefa = prompt("Tarefa:");
    tarefas.push(nomeTarefa);

}

console.log('tarefas ${tarefas.length}tarefas')



