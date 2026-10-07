import PromptSync from "prompt-sync"
const prompt = PromptSync()
let nota1 = parseFloat(prompt('qual a nota 1?'))
let nota2 = parseFloat(prompt('qual a nota 2?'))
let mediasimples = ( nota1 + nota2)/2
console.log(`à media do aluno é ${mediasimples}`)

