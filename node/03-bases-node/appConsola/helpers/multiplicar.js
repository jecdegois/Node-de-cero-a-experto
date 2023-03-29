const fs = require("fs");

const createFile = (base = 5, list = false, limit = 10) => {
  return new Promise((resolve, reject) => {
    let output = "";

    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i} \n`;
    }

    if (list) {
      console.log("======================");
      console.log(`    Tabla del: ${base}    `);
      console.log("======================");
      console.log(output);
    }

    fs.writeFileSync(`tabla-${base}.txt`, output);

    resolve(`tabla-${base}.txt creada exitosamente`);
  });
};

module.exports = { createFile };
