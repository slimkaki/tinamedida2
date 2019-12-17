const Express = require('express');
const mongoose = require('mongoose');
const Routes = require('./src/routes')
var bodyParser = require("body-parser")

class App {
    constructor(){
        this.server = Express();
        this.database()
        this.routes();
    }

    database() {
      mongoose
        .connect(mongoURI, { useNewUrlParser: true })
        .then(() => console.log("MongoDB"))
        .catch((err => console.log(err)))
        mongoose.set('useFindAndModify', false);
    }

    routes() {
        this.server.use('/routes', Routes);
    
        this.server.use((req, res) => {
          res.status(404).json({ error: 'Página não encontrada' });
        });
    
        this.server.use((error, req, res, next) => {
          res.status(500).json({ error: 'Erro interno' });
        });
      }
}
module.exports = new App().server;