import PromptSync from "prompt-sync";
const prompt = PromptSync();


let peso = Number(prompt(" Qual seu peso? "));
let altura = Number(prompt(" Qual sua altura? "));

let IMC = peso/(altura*altura);
console.log(" Seu IMC é: ")

if (IMC < 18.5 ){
console.log( "Abaixo do peso")}
else if( IMC >= 18.5 && IMC <= 24.9){
console.log( "Peso normal")
}else if  ( IMC >= 25 && IMC <= 29.9){
console.log("Sobrepeso")
}else{
    console.log("Obesidade");
}
