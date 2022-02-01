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
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  }
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id); 
  if (empleado) {
    callback(null, empleado.nombre)
  } else {
    callback(`Empleado con id ${id} no existe`);
  }

}

const getSalario = (id, callback) => {
  const salario = salarios.find(s => s.id === id) ?.salario;
  if(salario) {
    callback(null, salario)
  } else {
    callback(`El empleado con id ${id} no tiene salario`)
  }
}
const id = 3;

getEmpleado(id, (err,empleado) => {
  if (err) {
    console.log('EROR!!');
    return console.log(err);
  }

getSalario(id, (err, salario) => {
  if (err) {
    console.log("EROOR");
    return console.log(err);
  }

  console.log("Cosulta correcta");
  console.log('El empleado: ', empleado, 'Tiene un salario de: ', salario);
});
})

