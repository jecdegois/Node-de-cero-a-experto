const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");


class Server {

  constructor() {
    
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Conectar a BD
    this.connectDB();

    //Middelwares = funciones que agregan otra funcionalidad al webserves
    this.middelwares();

    //rutas de la app
    this.routes();
  }

  async connectDB() {
    await dbConnection()
  }

  middelwares() {
    
    //CORS
    this.app.use( cors() );

    // Parseo y lectura del body
    this.app.use( express.json() )

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
