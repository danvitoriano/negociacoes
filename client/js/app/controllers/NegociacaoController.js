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
        let negociacao = this._criaNegociacao();
        let lstNegociacao = this._listaNegociacoes._negociacoes;
        
        if(!lstNegociacao.some(obj => obj.isEquals(negociacao)))
        {
            this._listaNegociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._listaNegociacoes);

            this._mensagem.texto = "Negociação adicionada com sucesso";
        } else {
            this._mensagem.texto = "Já existe essa negociação na lista";
        }
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    importaNegociacoes() {
        let service = new NegociacaoService();        
        let lstNegociacao = this._listaNegociacoes._negociacoes;
        this._mensagem.texto = "Negociações do período importadas";
        service
            .obterNegociacoes()
            .then(negociacoes =>
                negociacoes.forEach(negociacao => {        
                    if(!lstNegociacao.some(obj => obj.isEquals(negociacao)))
                    {
                        this._listaNegociacoes.adiciona(negociacao);                        
                        this._negociacoesView.update(this._listaNegociacoes);
                        this._mensagemView.update(this._mensagem);
                    } else {
                        this._mensagem.texto = "Negociações do período importadas (menos duplicadas).";
                    }
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
