var http = require('http')
    ,app = require('./config/express')
    ,mongodb = require("mongodb")
    ,db = null;

mongodb.MongoClient.connect("mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority", function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
      
    db = client.db();
    console.log("MongoDb conectado");
      
});

      
http.createServer(app).listen(3000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});


