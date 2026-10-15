import PromptSync from "prompt-sync";
const prompt = PromptSync ();
// orçamento de projetos

 let filaProjetos = [];

 let cliente = prompt("Digite o nome da empresa cliente:")
 let valorEstimado = parseFloat(prompt(" digite o valor do projeto estimado em reais? "));

 let projetos = {cliente: cliente, valorEstimado: valorEstimado};

 filaProjetos.push(projetos);

 let urgente = prompt("O projeto possui prazo de entrega urgente? (sim/não)");{

 if(urgente.length === "sim" && valorEstimado > 3000);

 filaProjetos[0].valorEstimado = filaProjetos.valorEstimado*1,15 
}

console.log(filaProjetos);
// não sei por que não está fazendo o calculo??????????????















