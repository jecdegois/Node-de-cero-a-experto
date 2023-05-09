const Tarea = require("./tarea");

class Tareas {
  //privated properties
  #listado = {}; 

  constructor() {
    this.#listado = {};
  }


  cargarTareaFromArray(tareas=[]) {

    tareas.forEach(tarea => {
      this.#listado[tarea.id] = tarea
    })

  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this.#listado[tarea.id] = tarea;
  }

  get tareas() {
    const listadoTareas = []

    Object.keys(this.#listado).forEach(key => {
      const tarea = this.#listado[key]
      listadoTareas.push(tarea)
    })

    return listadoTareas
  }

  listadoCompleto() {

    console.log() //para generar un salto de linea

    this.tareas.forEach((tarea, i) => {

      const idx = `${i + 1}.`.green;


      const { description, completadoEn } = tarea;

      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${description} :: ${estado}`);
    });
  }

  listarPendientesCompletadas( completadas = true ) {


    console.log() //para generar un salto de linea

    let contador = 0; //funcinara como el indice
    
    this.tareas.forEach(tarea => {

      const { description, completadoEn } = tarea;

      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if(completadas) { //Se evalua si quiere listar solo las completadas

        if(completadoEn) { //si la varible de completadoEn tiene algo, esta completada la tarea

          contador += 1 ;
          console.log(`${ (contador + '.').green } ${description} :: ${completadoEn.green}`);

        }
      } else {

        if(!completadoEn) {

          contador += 1 ;
          console.log(`${ (contador + '.').green } ${description} :: ${estado}`);

        }
      }
      
    })
  }

  eliminarTarea(id = '') {

    if ( this.#listado[id] ) {
      delete this.#listado[id];
    }
  }

  toggleCompletadas (ids = []) {

    ids.forEach(id => {
      
      const tarea = this.#listado[id];

      if( !tarea.completadoEn ) {
        tarea.completadoEn = new Date().toISOString();
      }

    })

    this.tareas.forEach(tarea => {
      if(!ids.includes(tarea.id)) {

        this.#listado[tarea.id].completadoEn = null

      }
    })

  }
}

module.exports = Tareas;
