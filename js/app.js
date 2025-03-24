function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, selecione uma quantidade válida');
        return;
    }

    let novaQuantidade;
    let elementoQuantidade;
    let mensagemErro;

    if (tipoIngresso === 'pista') {
        novaQuantidade = quantidadePista;
        elementoQuantidade = 'qtd-pista';
        mensagemErro = 'Quantidade indisponível para pista';
    } else if (tipoIngresso === 'superior') {
        novaQuantidade = quantidadeCadeiraSuperior;
        elementoQuantidade = 'qtd-superior';
        mensagemErro = 'Quantidade indisponível para cadeira superior';
    } else if (tipoIngresso === 'inferior') {
        novaQuantidade = quantidadeCadeiraInferior;
        elementoQuantidade = 'qtd-inferior';
        mensagemErro = 'Quantidade indisponível para cadeira inferior';
    }

    if (quantidade > novaQuantidade) {
        alert(mensagemErro);
    } else {
        document.getElementById(elementoQuantidade).textContent = novaQuantidade - quantidade;
        alert('Compra realizada com sucesso!');
    }
}
