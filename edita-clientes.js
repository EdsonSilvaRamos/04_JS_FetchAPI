const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputCpf = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados => {
    inputCpf.value = dados[0].cpf
    inputNome.value = dados[0].nome
});

const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if (!verificaCpf(inputCpf.value)) {
        alert("Esse CPF não é válido");
        return;
    }

    editarCliente(id, inputCpf.value, inputNome.value)
});