import PromptSync from "prompt-sync";
const prompt = PromptSync();

const estoqueTamanhos = [8, 12, 16]; 

const quantidade = parseInt(prompt("camisa P vendidas: "));

estoqueTamanhos[0] = estoqueTamanhos[0] - quantidade;

console.table(estoqueTamanhos)




if(estoqueTamanhos[0] < 5){
    console.log("Alerta:Estoque de luvas tamanho P está crítico!")
} else{
    console.log("Estoque atualizado. quantidade restante  tamanho P: "+estoqueTamanhos[0])
}



