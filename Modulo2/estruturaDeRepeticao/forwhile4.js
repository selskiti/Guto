import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salarios = [2500, 3200, 4100, 5000, 6200];
let salariosAtualizados =[];

for(let i = 0; i < salarios.length; i++){
   let novoSalario = salarios[i] * 1.10;
   salariosAtualizados.push(novoSalario);

}

   console.log("Salarios atualizados:", salariosAtualizados);


