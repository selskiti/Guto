// aqui não precisa do usuário


function cadastrarProduto( nome, preco, quantidade) {
    const produto = {
      nome: nome,
      preco: preco,
      quantidade: quantidade,
    };
    return produto;
    }

    let estoque = []