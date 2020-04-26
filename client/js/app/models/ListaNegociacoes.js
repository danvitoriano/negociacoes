var db  = require('../../../../server/config/database');

export class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        db.['negociacoes'].save(negociacao);
    }

    esvazia() {
        this._negociacoes = [];
        db.negociacoes.remove();
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
        db.negociacoes.find();
    }
}