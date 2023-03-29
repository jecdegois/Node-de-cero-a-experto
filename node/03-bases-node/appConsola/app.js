//MI VERSION DE LA APP DE CONSOLA EN EL CURSO :)
const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;
const { createFile } = require("./helpers/multiplicar.js");

console.clear();

createFile(argv.b, argv.l)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
