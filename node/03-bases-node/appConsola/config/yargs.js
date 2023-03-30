const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      default: 1,
      describe: "Es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: true,
      default: 10,
      describe: "Este seria el limite de la tabla de multiplicar",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv; //equivale a export default
