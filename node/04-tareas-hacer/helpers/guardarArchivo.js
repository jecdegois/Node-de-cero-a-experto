const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {

  //validar si existe el archivo
  if (!fs.existsSync(archivo)) {
    return null;
  }

  //En caso que exista lo lee y lo retorna
  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(info)
  //console.log(info)

  return data
};

module.exports = {
  guardarDB,
  leerDB
};
