export class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {         
        var validaCampos = this.validaCamposNegociacao(negociacao);
        return validaCampos.trim() == "" ? this._negociacoes.push(negociacao) : validaCampos;

    }

    validaCamposNegociacao(props) {        
        // valido o nome        
        let  retorno = props.nome.trim() == "" ? "Nome" : "";        
        return retorno;           
    }
    esvazia() {
        this._negociacoes = [];
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }
}