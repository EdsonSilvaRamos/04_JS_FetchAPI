const informacoesClientes = [{
        cpf: 66809433023,
        nome: "Jairo"
    },
    {
        cpf: 12345678900,
        nome: "Ana"
    }
];

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {

    const linha = document.createElement("tr")
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <td></td>`;

    linha.innerHTML = conteudoLinha;
    return linha;

};


informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})

console.log(corpoTabela);