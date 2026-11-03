import PromptSync from "prompt-sync";
const prompt = PromptSync();

const carrinhos = [
    {
    cliente: "Augusto",
    precos: [35, 50, 13],    
},

{
    cliente: "Nikolas",
    precos: [21, 35, 70],
},

{
    cliente: "Jean",
    precos: [12, 34, 65],
}];

let clientesPagaram = [];


for (let i = 0; i < carrinhos.length; i++) {

    let totalCompra = 0;
    let totalPago = 0;

    console.log("-------------------------");
    console.log("Cliente: " + carrinhos[i].cliente);

    
    for (let j = 0; j < carrinhos[i].precos.length; j++) {
   totalCompra += carrinhos[i].precos[j];
    }

    console.log("Total da compra: R$ " + totalCompra);

    
    while (totalPago < totalCompra) {
        let pagamento = Number(
            
            prompt("Cliente " + carrinhos[i].cliente +
            "\nTotal: R$ " + totalCompra +
            "\nValor recebido:")
        );

        totalPago += pagamento;

        console.log("Valor recebido: R$ " + pagamento);
        console.log("Total pago: R$ " + totalPago);

    }

    // Calcular o troco
    let troco = totalPago - totalCompra;

    console.log("Pagamento concluído!");

    if (troco > 0) {
        console.log("Troco: R$ " + troco);
    } else {
        console.log("Sem troco.");
    }

    clientesPagaram.push(carrinhos[i].cliente);
}

// Relatório final

console.log("RELATÓRIO FINAL");
console.log("Clientes que pagaram:");

for (let i = 0; i < clientesPagaram.length; i++) {
    console.log(clientesPagaram[i]);
}





