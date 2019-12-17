const Express = require('express');
var keys = require('./src/keys.js');
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://tinamedida:${keys.atlasKeys}@cluster0-incug.mongodb.net/tinamedida?retryWrites=true&w=majority`
const cors = require('cors');
var bodyParser = require("body-parser");

const Routes = require('./src/routes.js');

class App {
    constructor(){
        this.server = Express();
        this.database()
        this.middlewares();
        this.routes();
    }

    database() {
      mongoose
        .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB"))
        .catch((err => console.log(err)))
      mongoose.set('useFindAndModify', false);
    }    

    middlewares() {
      this.server.use(cors());
      this.server.use(Express.json());
      this.server.use(bodyParser.json())
      this.server.use(
        bodyParser.urlencoded({
          extended: false
        })
      )
    }

    routes() {
        this.server.use('/routes', Routes);
    
        this.server.use((req, res) => {
          res.status(404).json({ "error 404": 'Página não encontrada' });
        });
    
        this.server.use((error, req, res, next) => {
          res.status(500).json({ "error 500": 'Erro interno' });
        });
      }
}
module.exports = new App().server;