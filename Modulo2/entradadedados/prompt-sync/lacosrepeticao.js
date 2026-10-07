import PromptSync from "prompt-sync";
const prompt = PromptSync()

let numero = parseInt(prompt('Qual tabuada você deseja saber? '))

console.log(`--- tabuada do ${numero} ate 10---`)

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)
}