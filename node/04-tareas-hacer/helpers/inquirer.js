const inquirer = require("inquirer");

require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green}  Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green}  Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green}  Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green}  Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green}  Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green}  Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear()

  console.log("=========================".green);
  console.log("  Seleccione una opcion  ".white);
  console.log("=========================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const pregunta = [
    {
      type: "input",
      name: "resultado",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(pregunta);
};

const leerInput = async (mensaje) => {
  const pregunta = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) return `Por favor ingrese un valor`;
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(pregunta);

  return desc;
};

const listadoTareasBorrar = async (listadoTareas = []) => {

  const choices = listadoTareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
    };
  });

  choices.unshift({value: '0', name: '0'.green + ' Cancelar'}) //Colocar de primera la opcion de cancelar

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);

  return id;
};

const confirmar = async (mensaje) => {

  const pregunta = [
    {
      type: 'confirm',
      name: 'ok',
      message: mensaje
    }
  ]


  const { ok } = await inquirer.prompt(pregunta);

  return ok


}

const mostrarListadoChecklist = async (listadoTareas = []) => {

  const choices = listadoTareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
      checked: ( tarea.completadoEn ) ? true : false
    };
  });


  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(preguntas);

  return ids;
};


module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
};
