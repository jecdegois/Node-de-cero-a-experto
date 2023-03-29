const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;
// ESTE ES EL PUNTO DE ENTRADA, DEBE CONTENER LA MENOR LOGICA POSIBLE

// const fileSystem = require("fs"); // por motivos didacticos tiene ese nombre, lo ideal es que sea "fs"
const { crearArchivo } = require("./helpers/multiplicar.js");

console.clear();
// const base = 900;

//console.log(process.argv);
//console.log(argv);

console.log("base yargs", argv.base); // base yargs 5
//const [, , arg3 = "base=5"] = process.argv;

//const [, base = 5] = arg3.split("=");

//console.log(base);

// let salida = "";

// console.log("======================");
// console.log(`    Tabla del: ${base}    `);
// console.log("======================");
// for (let i = 1; i <= 10; i++) {
//   salida += `${base} x ${i} = ${base * i} \n`;
// }

// fileSystem.writeFileSync(`tabla-${base}.txt`, salida);

// console.log(`Tabla-${base} creada exitosamente`);

// fileSystem.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;

//   console.log(`tabla-${base}.txt CREADO EXITOSAMENTE`);
// });

// console.log(salida);
/* crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err)); */
