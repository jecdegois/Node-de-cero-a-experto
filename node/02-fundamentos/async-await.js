const empleados = [
  {
    id: 1,
    nombre: "Jose",
  },
  {
    id: 2,
    nombre: "Mariano",
  },
  {
    id: 3,
    nombre: "Marianys",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];


const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    salario
      ? resolve(salario)
      : reject(`No nay salario para el trabajador  ${empleado}`);
  });
};

const id = 3;


const getInfoUsuario = async (id) => {
  try {
      const empleado = await getEmpleado(id);
      const salario = await getSalario(id);

      return `El salario del empleado: ${empleado} es: ${salario}`;
  } catch (error) {
    throw error; //EL THROW LLAMA EL REJECT
  }
}

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(err => {
    console.log('MAL')
    console.log(err)});



