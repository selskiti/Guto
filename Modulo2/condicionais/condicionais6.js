import PromptSync from "prompt-sync";
const prompt = PromptSync();


let a = 10;
let b = 5;
let ligado = true;
console.log(a > b && b > 0); // (a)
console.log(a < b || ligado); // (b)
console.log(!ligado); // (c)

console.log(a === "10"); 
console.log(a !== b && !false); 