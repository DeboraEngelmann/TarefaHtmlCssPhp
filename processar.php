<?php
$nome = $_POST['nome'];
$codigo = $_POST['codigo'];
$cpf = $_POST['cpf'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$cep = $_POST['cep'];
$pais = $_POST['pais'];
$observacao = $_POST['observacao'];

echo "Nome: " .$nome."<br>";
echo "Código: " .$codigo."<br>";
echo "CPF/CNPJ: " .$cpf."<br>";
echo "Telefone: " .$telefone."<br>";
echo "Endereço: " .$endereco."<br>";
echo "Bairro: " .$bairro."<br>";
echo "Cidade: " .$cidade."<br>";
echo "Cep: " .$cep."<br>";
echo "País: " .$pais."<br>";
echo "Observação: " .$observacao."<br>";
?>