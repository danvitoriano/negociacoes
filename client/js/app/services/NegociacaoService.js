class NegociacaoService {
    obterNegociacoesSemana(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log("oi")
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                } else {
                    cb('Não foi possível obter as negociações', null)
                }
            }
        }
        xhr.send();
    }
}