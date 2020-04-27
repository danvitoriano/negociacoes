var database = {};

var mongodb = require("mongodb");
var url =  "mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority";
var client = mongodb.MongoClient;

database.find = function(colName, negociacao){
    var result = {};

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        result = con.collection(colName).find(negociacao);
        client.close();
    });

    return result;
}

database.insert = function(colName, negociacao){
    var result = {};

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        result = con.collection(colName).insert(negociacao);
        client.close();
    });

    return result;
}

database.update = function(colName, negociacaoOld, negociacaoNew){
    var result = {};

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        result = con.collection(colName).update(negociacaoOld, negociacaoNew)
        client.close();
    });

    return result;
}


database.update = function(colName, negociacao){
    var result = {};

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        result = con.collection(colName).remove(negociacao)
        client.close();
    });

    return result;
}

module.exports = database;