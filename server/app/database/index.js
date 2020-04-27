var database = {};

var mongodb = require("mongodb");
var url =  "mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority";
var client = mongodb.MongoClient;

database.find = function(colName, negociacao){

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        database.result = con.collection(colName).find(negociacao);
        console.log('api do mongo ' + database.result);
        client.close();
    });
}

database.insert = function(colName, negociacao){
    
    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        database.result = con.collection(colName).insert(negociacao);
        client.close();
    });
}

database.update = function(colName, negociacaoOld, negociacaoNew){

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        database.result = con.collection(colName).update(negociacaoOld, negociacaoNew)
        client.close();
    });
}


database.remove = function(colName, negociacao){
    
    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }

        var con = client.db();
             
        database.result = con.collection(colName).remove(negociacao)
        client.close();
    });
}

database.result = {};

module.exports = database;