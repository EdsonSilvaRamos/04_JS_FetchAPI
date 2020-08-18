const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputCpf = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados => {
    inputCpf.value = dados[0].cpf
    inputNome.value = dados[0].nome
});

const formEdicao = document.querySelector('[data-form]');

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement("tr")
    const conteudoLinha = `<div class="alert alert-success" role="alert">${mensagem}</div>`;
    linha.innerHTML = conteudoLinha;

    return linha;
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement("tr")
    const conteudoLinha = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
    linha.innerHTML = conteudoLinha;

    return linha;
}

formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if (!verificaCpf(inputCpf.value)) {
        alert("Esse CPF não é válido");
        return;
    }

    editarCliente(id, inputCpf.value, inputNome.value).then(resposta => {
        if (resposta.status === 200) {
            formEdicao.appendChild(mensagemSucesso("Alteração realizada com sucesso!"));
        } else {
            formEdicao.appendChild(mensagemSucesso("Erro ao editar cliente!"));
        }
    })
});