import PromptSync from "prompt-sync";
const prompt = PromptSync;

const jogador = { nome: "Kaio", pontos: 100, ativo: true };
jogador.pontos = jogador.pontos + 50;
jogador.time = "Alpha";
console.log(jogador.nome); // (a) = kaio
console.log(jogador.pontos); // (b) = 150
console.log(jogador.time); // (c) = Alpha
console.log(jogador.ativo); // (d) = true