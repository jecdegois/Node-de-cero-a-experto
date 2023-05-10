const express = require("express");
const cors = require('cors')


class Server {
  constructor() {
    
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';


    //Middelwares = funciones que agregan otra funcionalidad al webserves
    this.middelwares();
    //rutas de la app
    this.routes();
  }

  middelwares() {
    //CORS
    this.app.use( cors() )
    //Directorio Publico
    this.app.use(express.static('public')) //.use() es un middelware de express
  }

  routes() {
    this.app.use( this.usuariosPath , require('../routes/userRoutes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
