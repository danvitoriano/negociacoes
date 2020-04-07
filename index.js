var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

