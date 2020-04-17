import { HttpService } from './HttpService';
import { Negociacao } from '../models/Negociacao';

export class NegociacaoService {
    constructor() {
        this._http = new HttpService();
        this._apiDomain = "https://us-central1-negociacoes-hosting.cloudfunctions.net/api";

        if(window.location.href.indexOf("localhost") > -1) {
            this._apiDomain = "http://localhost:3000";
        }
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this._http
                .get(this._apiDomain + "/negociacoes/semana")
                .then(negociacoes => {
                    resolve(
                        negociacoes.map(
                            objeto =>
                                new Negociacao(
                                    new Date(objeto.data),
                                    objeto.quantidade,
                                    objeto.valor
                                )
                        )
                    );
                })
                .catch(erro => {
                    console.error(erro)
                    reject("Não foi possível obter as negociações da semana");
                });
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this._http
                .get(this._apiDomain + "/negociacoes/anterior")
                .then(negociacoes => {
                    resolve(
                        negociacoes.map(
                            objeto =>
                                new Negociacao(
                                    new Date(objeto.data),
                                    objeto.quantidade,
                                    objeto.valor
                                )
                        )
                    );
                })
                .catch(erro => {
                    console.error(erro)
                    reject("Não foi possível obter as negociações da semana anterior");
                });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this._http
                .get(this._apiDomain + "/negociacoes/retrasada")
                .then(negociacoes => {
                    resolve(
                        negociacoes.map(
                            objeto =>
                                new Negociacao(
                                    new Date(objeto.data),
                                    objeto.quantidade,
                                    objeto.valor
                                )
                        )
                    );
                })
                .catch(erro => {
                    console.error(erro)
                    reject("Não foi possível obter as negociações da semana retrasada");
                });
        });
    }

    obterNegociacoes() {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()
            ])
                .then(periodos => {
                    let negociacoes = periodos
                        .reduce((dados, periodo) => dados.concat(periodo), [])
                        .map(
                            dado =>
                                new Negociacao(new Date(dado.data), dado.quantidade, dado.valor)
                        );

                    resolve(negociacoes);
                })
                .catch(erro => reject(erro));
        });
    }
}
