import indexDbConfig  from "./IndexDbConfig"

export class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);

        indexDbConfig.gravar(negociacao);
    }

    esvazia() {
        indexDbConfig.deletaTabela();
        this._negociacoes = [];
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }
}