function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);
    const cotacaoEuro = parseFloat(document.getElementById("cotacaoEuro").value);
    let valorConvertidoDolar = 0;
    let valorConvertidoEuro = 0;

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("valorConvertido").innerText = "Por favor, insira um valor válido.";
        return;
    }

    if (isNaN(cotacaoDolar) || cotacaoDolar <= 0) {
        document.getElementById("valorConvertido").innerText = "Por favor, insira uma cotação válida para o Dólar.";
        return;
    }

    if (isNaN(cotacaoEuro) || cotacaoEuro <= 0) {
        document.getElementById("valorConvertido").innerText = "Por favor, insira uma cotação válida para o Euro.";
        return;
    }

    valorConvertidoDolar = valor * cotacaoDolar;
    valorConvertidoEuro = valor * cotacaoEuro;

    document.getElementById("valorConvertido").innerHTML = 
        `O valor convertido em escudos é:<br>
         Dólar: ${valorConvertidoDolar.toFixed(2)}<br>
         Euro: ${valorConvertidoEuro.toFixed(2)}`;
}
