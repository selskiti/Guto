import PromptSync from "prompt-sync";
const prompt = PromptSync;

const validador = (nome, codigoCracha) => {
    
switch (true) {
    case (codigoCracha > 1000 && nome.length > 5):
     return true;
    break;

}
return false;

};

let nome = teclado("informe seu nome: ")
let codigoCracha = parseInt(teclado("Informe o numero do seu cracha:  "));

if(validador(nome, codigoCracha)){
    console.log("Acesso consedido.");

} else {validador(nome, codigoCracha)
    console.log("Acesso negado.");
    
}