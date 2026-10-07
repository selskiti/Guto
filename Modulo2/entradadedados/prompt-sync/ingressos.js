import PromptSync from "prompt-sync";
const prompt = PromptSync

const lotes = [50, 40, 60, 30, 70]

let totalIngressos = 0;

for (let i = 0; i < lotes.length; i++) {
    totalIngressos += lotes[i];
}

    console.log(`o total de ingressos vendidos foi: ${totalIngressos}`);
