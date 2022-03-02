const fileSystem = require("fs");

const crearArchivo = async (base = 5) => {
  try {
    let salida = "";

    console.log("======================");
    console.log(`    Tabla del: ${base}    `);
    console.log("======================");
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    fileSystem.writeFileSync(`tabla-${base}.txt`, salida);

    return `Tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     let salida = "";

//     console.log("======================");
//     console.log(`    Tabla del: ${base}    `);
//     console.log("======================");
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i} \n`;
//     }

//     fileSystem.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`Tabla-${base}.txt`);
//   });
// };

module.exports = {
  crearArchivo,
};
