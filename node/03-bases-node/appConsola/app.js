//MI VERSION DE LA APP DE CONSOLA EN EL CURSO :)
const { createFile } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
require("colors");

console.clear();
createFile(argv.b, argv.l, argv.h)
  .then((msg) => console.log(msg.rainbow))
  .catch((err) => console.log(err));
