import PromptSync from "prompt-sync";
const prompt = PromptSync;

const temperaturas = [22, 30, 18, 27, 15, 33, 21];

let Maior = temperaturas [5];
let Menor = temperaturas [4];

for(let i = 0; i < temperaturas.length; i++){

    if(temperaturas [i] > Maior)
    (Maior = temperaturas[i])

    if(temperaturas[i] < Menor)
    (Menor = temperaturas[i])

}
console.log("Maior:", Maior);
console.log("Menor:", Menor);



