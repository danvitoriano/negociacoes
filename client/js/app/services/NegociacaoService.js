class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesSemana() {
        return new Promise((resolve, reject) => {
            this._http.get('http://localhost:3000/negociacoes/semana')
        .then(negociacoes => {
            resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            )
        })
        .catch(
            erro => {
                reject(erro)
            }
        )
        })
            

    }

    obterNegociacoesAnterior() {
        return new Promise((resolve, reject)=> {
            this._http.get('http://localhost:3000/negociacoes/anterior')
        .then(negociacoes => {
            resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            )
        })
        .catch(
            erro => {
                reject(erro)
            }
        )
        })
    }

    obterNegociacoesRetrasada() {
        return new Promise((resolve, reject) => {
            this._http.get('http://localhost:3000/negociacoes/retrasada')
        .then(negociacoes => {
            resolve(negociacoes
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            )
        })
        .catch(
            erro => {
                reject(erro)
            }
        )
        })
    }

    obterNegociacoes(){
        return new Promise((resolve, reject) => {
            Promise.all([
                this.obterNegociacoesSemana(),
                this.obterNegociacoesAnterior(),
                this.obterNegociacoesRetrasada()
            ]).then(periodo => {
                    let negociacoes = periodo
                    .reduce((arrayFlat, array) => arrayFlat.concat(array), [])
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    resolve(negociacoes)
                })
                .catch(
                    erro => reject(erro)
                )
        })
        
    }
}