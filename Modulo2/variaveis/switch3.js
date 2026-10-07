import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Escolha um produto cadastrado no sistema:" + 
    "\n[1] - Fone" +
    "\n[2] - Teclado" +
    "\n[3] - Mouse"
);

let escolha = Number(prompt("Qual produto deseja comprar? R: "));

let registroDaCompra = {
    produto: "",
    precoFixo: 0
}

switch (escolha){
    case 1:
        registroDaCompra.produto = "Fone";
        registroDaCompra.precoFixo = 50
        break;
    case 2:
        registroDaCompra.produto = "Teclado";
        registroDaCompra.precoFixo = 250
        break;
    case 3:
        registroDaCompra.produto = "Mouse";
        registroDaCompra.precoFixo = 150
        break;
        
        default:
            pedido.produto = "Desconhecido";
            pedido.preco = 0;
            break;

            
}

console.log("\n ===== pedido final =====");
            console.table(registroDaCompra);