import PromptSync from "prompt-sync";
const prompt = PromptSync;

const usuario = { nome: "João", nivel:2, premium: "true"}

console.log(usuario.nome, usuario.nivel, usuario.premium );
// Saída esperada: { nome: 'João', nivel: 2, premium: true }