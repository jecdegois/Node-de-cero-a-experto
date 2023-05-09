require("dotenv").config();
const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();

  let opt; // declaracion de la opcion

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje
        const termino = await leerInput("Ciudad: ");

        //Buscar las ciudades
        const lugares = await busquedas.ciudad(termino);

        //Seleccionar el lugar
        const id = await listarLugares(lugares);
        
        if(id === '0') continue;

        const lugarSel = lugares.find((lugar) => lugar.id === id); //devuelve la primera coincidencia


        //guardar en DB
        busquedas.aggHistorial(lugarSel.nombre);

        //console.log({id})

        //Clima
        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

        //Mostrar resultados
        console.clear();
        console.log("\nInformacion del lugar\n".green);
        console.log("Lugar:", lugarSel.nombre.green);
        console.log("Lat:", lugarSel.lat);
        console.log("Lng:", lugarSel.lng);
        console.log("Temperatura:", clima.temp);
        console.log("Min:", clima.min);
        console.log("Max:", clima.max);
        console.log("Como esta el clima:", clima.desc.green);
        break;
      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1 }.`.green;

          console.log(`${idx} ${lugar}`)

        })
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
