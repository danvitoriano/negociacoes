/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var dataAtual = new Date();
var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var database  = require('../database');

var negociacoes = [
      { data : dataAtual,     quantidade : 1, valor : 150},
      { data : dataAtual,     quantidade : 2, valor : 250},
      { data : dataAtual,     quantidade : 3, valor : 350},
      { data : dataAnterior,  quantidade : 1, valor : 450},
      { data : dataAnterior,  quantidade : 2, valor : 550},
      { data : dataAnterior,  quantidade : 3, valor : 650},
      { data : dateRetrasada, quantidade : 1, valor : 750},
      { data : dateRetrasada, quantidade : 2, valor : 950},
      { data : dateRetrasada, quantidade : 3, valor : 950}
    ];


api.listaSemana = function(req, res) {   
    //var negociacoesAtuais = negociacoes.filter(function(negociacao) {
    //    return negociacao.data > dataAnterior;
    //});
    var negociacoesAtuais = database.find('negociacoes', {});
    res.json(negociacoesAtuais);
};

api.listaAnterior = function(req, res) {
   
   //var negociacoesAnteriores = negociacoes.filter(function(negociacao) {
   //     return negociacao.data < dataAtual && negociacao.data > dateRetrasada;
   // });

    var negociacoesAtuais = database.find('negociacoes', {});
	setTimeout(function() {
		res.json(negociacoesAnteriores);	
	}, 500);
    
};

api.listaRetrasada = function(req, res) {

    //var negociacoesRtrasadas = negociacoes.filter(function(negociacao) {
    //    return negociacao.data < dataAnterior;
    //});
    var negociacoesAtuais = database.find('negociacoes', {});
    res.json(negociacoesRtrasadas);
    
};

api.cadastraNegociacao = function(req, res) {

   console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   //negociacoes.push(req.body);
   var negociacao = req.body;
   var ret = database.insert(negociacao);
   res.status(200).json("Negociação recebida");
};



module.exports = api;