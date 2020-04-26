var database = {};

var mongodb = require("mongodb");
var url =  "mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority";
var client = mongodb.MongoClient;


database.connect = function () {
    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
        
        var negociacao = { 
            'data' : new Date(), 
            'quantidade' : 4, 
            'valor' : 150.98
        };

        con.collection('negociacoes').save(negociacao);
    });
   
};


module.exports = database;