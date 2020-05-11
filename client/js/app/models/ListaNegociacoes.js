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

    filtraData(dataRecebida) {
        let negociacaoFilter = this._negociacoes.filter(function (item){
            let data1 = new Date(item._data);
            let data2 = new Date(dataRecebida);

            if(
                data1.getDate() == (data2.getDate() + 1)
                && (data1.getMonth() + 1) == (data2.getMonth() + 1)
                && data1.getFullYear() == data2.getFullYear()
            ){
                return item;
            }
        })

        this._negociacoes = negociacaoFilter;
    }
}