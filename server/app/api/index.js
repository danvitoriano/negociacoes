/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var dataAtual = new Date();

var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);

var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var database  = require('../database');

/*
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
*/

api.listaSemana = function(req, res) {   
    //var negociacoesAtuais = negociacoes.filter(function(negociacao) {
    //    return negociacao.data > dataAnterior;
    //});
    database.find('negociacoes', {data : {'$gt': dataAnterior}}, function(result){
        res.json(result);
    });
};

api.listaAnterior = function(req, res) {
   //var negociacoesAnteriores = negociacoes.filter(function(negociacao) {
   //     return negociacao.data < dataAtual && negociacao.data > dateRetrasada;
   // });
    database.find('negociacoes', {data : {'$lt': dataAtual}, data: {'$gt': dateRetrasada}}, function(result){
        res.json(result);
    });
    
    //setTimeout(function() {
	//	res.json(negociacoesAnteriores);	
	//}, 500);
    
};

api.listaRetrasada = function(req, res) {

    //var negociacoesRetrasadas = negociacoes.filter(function(negociacao) {
    //    return negociacao.data < dataAnterior;
    //});
    database.find('negociacoes', {data : {'$lt': dataAnterior}}, function(result){
        res.json(negociacoesRetrasadas);
    });  
};

api.cadastraNegociacao = function(req, res) {

   //console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   //negociacoes.push(req.body);
   var negociacao = req.body;
   database.insert('negociacoes', negociacao, function(result){
    res.json(result);
    //res.status(200).json("Negociação recebida");    
   });
};

module.exports = api;