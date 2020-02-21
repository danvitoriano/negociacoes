class NegociacaoService {
    obterNegociacoesSemana(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                } else {
                    cb("deu ruim", null)
                }
            }
        }
        xhr.send()
    }

    obterNegociacoesAnterior(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/anterior');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                } else {
                    cb("deu ruim", null)
                }
            }
        }
        xhr.send()
    }

    obterNegociacoesRetrasada(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                } else {
                    cb("deu ruim", null)
                }
            }
        }
        xhr.send()
    }
}