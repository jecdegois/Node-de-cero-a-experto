const fs = require("fs");
const axios = require("axios");

class Busquedas {
  //Properties
  historial = [];
  dbPath = "db";

  constructor() {
    // leer db si existe
    this.leerDB();
  }

  get historialCapitalizado(){

    return this.historial.map(lugar => {
      let palabras = lugar.split(' ')
      palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1))

      return palabras.join(' ');
    }
      )
  }

  get ParamsMapBox() {
    return {
      access_token: process.env.TOKEN_MAP_BOX || "",
      limit: 5,
      language: "es",
    };
  }

  get paramsOpenWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      //Peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.ParamsMapBox,
      });

      const resp = await instance.get();

      //const resp = await axios.get("https://reqres.in/api/users?page=2");
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      //Crear instancia de axios
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsOpenWeather, lat, lon },
      });

      const resp = await instance.get();

      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  aggHistorial(lugar = "") {
    //prevenir duplicados

    if (this.historial.includes(lugar.toLowerCase())) {
      return;
    }

    this.historial = this.historial.splice(0,5)

    this.historial.unshift(lugar.toLowerCase());

    //Grabar en DB

    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };

    //verificar que exista la carpeta DB
    if (!fs.existsSync(this.dbPath)) {
      fs.mkdirSync(this.dbPath);
    }
    fs.writeFileSync(`${this.dbPath}/historial.json`, JSON.stringify(payload));
  }
  leerDB() {

    //Debe de existir
    if(!fs.existsSync(`${this.dbPath}/historial.json`)) return;
    
    //cargar informacion
    const info = fs.readFileSync(`${this.dbPath}/historial.json`, {
      encoding: 'utf-8'
    })

    const data = JSON.parse(info);

    this.historial = data.historial
  }
}

module.exports = Busquedas;
