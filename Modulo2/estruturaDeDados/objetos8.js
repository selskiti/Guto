import PromptSync from "prompt-sync";
const prompt = PromptSync;

const produtos = [ 
    {nome: "teclado", preco: 150, estoque:10 },
    {nome: "mouse", preco: 50, estoque: 10},
    {nome: "placa de vídeo", preco: 4000, estoque:5},
    {nome: "ssd", preco: 500, estoque: 12},
    {nome: "processador", preco: 1800, estoque: 8} 
    
]

for(let i = 0; i < produtos.length; i++) {

console.log(`${produtos[i].nome} - R$ ${produtos[i].preco} (${produtos[i].estoque} un.)`)
}