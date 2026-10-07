import PromptSync from "prompt-sync";
const prompt = PromptSync;

const produtos = [
    {nome:"teclado", preco: 150, estoque: 5},
    {nome:"mouse", preco: 50, estoque: 15},
    {nome:"placa de video ", preco: 4000, estoque: 3},
    {nome:"ssd", preco: 500, estoque: 10},
    {nome:"processador", preco: 1800, estoque: 4}
]

for(let i = 0; i < produtos.length; i++) {

    //console.log(`${produtos[i].nome} - R$ ${produtos[i].preco} (${produtos[i].estoque} un.)`);
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco + " (" + produtos[i].estoque + " un.)");
}




// Teclado — R$ 150 (5 un.) tudo isso esta dentro do meu objeto
// interpolacao de strings ``
// console.log(`${produtos[i].nome} - R$ ${produtos[i].preco} (${produtos[i].estoque} un.)`);
// concatecao de strings +
// console.log(produtos[i].nome + " - R$ " + produtos[i].preco + " (" + produtos[i].estoque + " un.)");
 

    
    