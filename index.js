var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(process.env.PORT, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

