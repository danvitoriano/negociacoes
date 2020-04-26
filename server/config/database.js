var  mongodb = require("mongodb")
     ,client = mongodb.MongoClient    
     ,url =  "mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority";
    

var db =  client.connect(url, function (err, client) {
    
    if (err) {
        console.log(err);
        process.exit(1);
    }
    
    console.log("MongoDb Conectado");
    return client.db();
});

module.exports = db;