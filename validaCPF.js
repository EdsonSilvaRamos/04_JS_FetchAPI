function verificaCpfInvalido(cpf) {
    const cpfsInvalidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];
    return cpfsInvalidos.indexOf(cpf) === -1;
}

function somaNumerosCpf(cpf, totalDigitos, peso) {
    let soma = 0;
    for (let indice = 1; indice <= totalDigitos; indice++) {
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
    }

    return soma;
}

function verificaDigito(cpf, totalDigitos, peso, digitoVerificacao) {
    const soma = somaNumerosCpf(cpf, totalDigitos, peso);
    const resto = (soma * 10) % 11;

    return resto === digitoVerificacao;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDigitoPrimeiraParte = 9;
    const digitoVerificacao = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDigitoPrimeiraParte, peso, digitoVerificacao)
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDigitoSegundaParte = 10;
    const digitoVerificacao = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDigitoSegundaParte, peso, digitoVerificacao);
}

function verificaCpf(cpf) {
    return (
        verificaCpfInvalido(cpf) &&
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoDigito(cpf)
    );
}