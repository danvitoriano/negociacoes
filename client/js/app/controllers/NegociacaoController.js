import { ListaNegociacoes } from '../models/ListaNegociacoes';
import { Mensagem } from '../models/Mensagem';
import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { NegociacaoService } from '../services/NegociacaoService';
import { DateHelper } from '../helpers/DateHelper';
import { Negociacao } from '../models/Negociacao';

export class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $("#nome");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        if (this._campoNomePossuiApenasEspacoEmBranco()){
            this._mensagem.texto = `O campo nome contem apenas espaços em branco, por favor insira um valor válido!`;
            this._mensagemView.update(this._mensagem);       
            return
        }

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();                     
    }

    _campoNomePossuiApenasEspacoEmBranco() {
       return this._inputNome.value.trim() == "";
    }

    _criaNegociacao() {
        return new Negociacao(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputNome.focus();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        service
            .obterNegociacoes()
            .then(negociacoes =>
                negociacoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                    this._mensagem.texto = "Negociações do período importadas";
                    this._negociacoesView.update(this._listaNegociacoes);
                    this._mensagemView.update(this._mensagem);
                })
            )
            .catch(erro => {
                this._mensagem.texto = erro;
                this._mensagemView.update(this._mensagem);
                return;
            });
    }
}
