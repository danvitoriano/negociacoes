export class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    esvazia() {
        this._negociacoes = [];
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}