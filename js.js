function validateForm() {
    var codigo = document.forms["myForm"]["codigo"].value;
    if (codigo == "") {
        alert("O campo Código deve ser preenchido");
        return false;
    }
    var nome = document.forms["myForm"]["nome"].value;
    if (nome == "" || nome.length<3) {
        alert("O campo Nome deve ser preenchido e ter no mínimo 3 caracteres");
        return false;
    }
    var cpf = document.forms["myForm"]["cpf"].value;
    if (cpf == "" || cpf.length<14 || cpf.length>14) {
        alert("O campo CPF/CNPJ deve ser preenchido com o formato xxx.xxx.xxx-xx");
        return false;
    }
    var telefone = document.forms["myForm"]["telefone"].value;
    if (telefone == "" || telefone.length<12 || telefone.length>12) {
        alert("O campo Telefone deve ser preenchido com o formato xx9xxxx-xxxx");
        return false;
    }
    var endereco = document.forms["myForm"]["endereco"].value;
    if (endereco == "" || endereco.length<3) {
        alert("O campo Endereço deve ser preenchido e ter no mínimo 3 caracteres");
        return false;
    }
    var bairro = document.forms["myForm"]["bairro"].value;
    if (bairro == "" || bairro.length<3) {
        alert("O campo Bairro deve ser preenchido e ter no mínimo 3 caracteres");
        return false;
    }
    var cidade = document.forms["myForm"]["cidade"].value;
    if (cidade == "" || cidade.length<3) {
        alert("O campo Cidade deve ser preenchido e ter no mínimo 3 caracteres");
        return false;
    }
    var cep = document.forms["myForm"]["cep"].value;
    if (cep == "" || cep.length<9 || cep.length>9) {
        alert("O campo CEP deve ser preenchido e ter o formato xxxxx-xxx");
        return false;
    }
    var pais = document.forms["myForm"]["pais"].value;
    if (pais == "" || pais.length<3) {
        alert("O campo País deve ser preenchido e ter no mínimo 3 caracteres");
        return false;
    }
    return true;
}