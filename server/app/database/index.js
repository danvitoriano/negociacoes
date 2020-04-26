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
        console.log('1 ' + result);
        client.close();
    });

    console.log('2 ' + result);
    return result;
}


module.exports = database;