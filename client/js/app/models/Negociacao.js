export class Negociacao {

    constructor(nome, data, quantidade, valor) {

        this._nome = nome;
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;        
        Object.freeze(this);
    }

    get nome(){
        
        return this._nome;
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return new Date(this._data.getTime());
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }
   
}