import PromptSync from "prompt-sync";


import numeros from  "./numeros.js"
import adicionarNumero from "./adicionar.js";
import removerNumero from "./remover.js";
import calcularMedia from "./media.js";


const prompt = PromptSync();

let opcao = -1;
let num = -1;

do {
console.log("*******Menu*******");
console.log("1 - Adicionar número");
console.log("2 - Remover numero");
console.log("3 - Listar números");
console.log("4 - Calcular média");
console.log("5 - Calculçarn mediana");
console.log("6 - Sair");

opcao = parseInt(prompt("escolha uma opcao: "));

switch (opcao) {


   case 1: // adicionar um número
   console.log("Qual número você deseja adicionar?");
    num = parseFloat(prompt("R: "));
    adicionarNumero(num);
     break;

     case 2:
        removerNumero();
        break;

     case 3:
        console.table(numeros);
        break;

     case 4:
        console.log(`A média é: ${calcularMedia()}`);   
        break;
   case 0:
    console.log("Fechando programa...");
    break;
    default:
        console.log("Opção inválida!");
        break;
}

} while (opcao !== 0) 














