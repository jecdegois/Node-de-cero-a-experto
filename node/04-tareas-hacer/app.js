require("colors");
//const { mostrarMenu, pausa } = require("./helpers/mensajes");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");

const main = async () => {
  console.clear();
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    //cargar tareas
    tareas.cargarTareaFromArray(tareasDB);
  }

  do {
    //Print menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //Crear opcion
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);

        break;
      case "2":
        //Listar tareas
        tareas.listadoCompleto();
        break;
      case "3": //Listar completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case "4": //Listar pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case "5": // Completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.tareas);
        tareas.toggleCompletadas(ids)
        break;
      case "6": // Borrar
        const id = await listadoTareasBorrar(tareas.tareas);
        if (id !== 0) {
          const ok = await confirmar("Esta seguro de eliminar");

          if (ok) {
            tareas.eliminarTarea(id);
            console.log("Tarea eliminada");
          }
        }

        break;
    }

    guardarDB(tareas.tareas);

    await pausa();
  } while (opt !== "0");
};

main();
