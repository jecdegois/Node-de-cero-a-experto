const fs = require("fs");
const colors = require("colors");

const createFile = (base = 5, list = false, limit = 10) => {
  return new Promise((resolve, reject) => {
    let output = "";
    let message = "";

    for (let i = 1; i <= limit; i++) {
      output += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
      message += `${base} X ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log("======================".green);
      console.log("Tabla del:".green, colors.blue(base));
      console.log("======================".green);
      console.log(output);
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, message);

    resolve(`tabla-${base}.txt creada exitosamente`);
  });
};

module.exports = { createFile };
