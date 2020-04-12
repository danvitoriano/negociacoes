var http = require('http')
    ,app = require('./config/express');
const functions = require("firebase-functions");

http.createServer(app).listen(3000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});