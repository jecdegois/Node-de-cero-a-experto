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


// const getEmpleado = (id) => {

//   return new Promise((resolve, reject) => {
//     const empleado = empleados.find((e) => e.id === id)?.nombre;
//     if (empleado) {
//       resolve(empleado);
//     } else {
//       reject(`No existe empleado con id ${id}`);
//     }
//   });

   
// };
const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    (empleado) 
      ? resolve(empleado)
      :reject(`No existe empleado con id ${id}`);
    });

   
};

// const getSalario = (id) => {

//   return new Promise((resolve, reject) => {
//     const salario = salarios.find(s => s.id === id)?.salario;
//     if(salario) {
//       resolve(salario);
//     } else {
//       reject(`No nay salario para el id  ${id}`);
//     }
//   })

// }
const getSalario = (id) => {

  return new Promise((resolve, reject) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    
    (salario) 
      ? resolve(salario)
      : reject(`No nay salario para el trabajador  ${empleado}`);
  })

}



const id = 3;
// getEmpleado(id)
//   .then(empleado => console.log(empleado))
//   .catch(err => console.log(err));

//   getSalario(id)
//   .then(salario => console.log(salario))
//   .catch(err => console.log(err));

 // SIEMPRE SE DEBE MANEJAR EL ERROR EN LAS PROMESAS
// getEmpleado(id)
//   .then(empleado => {
//     getSalario(id)
//       .then(salario => {
//         console.log('El empleado:', empleado, 'tiene un salario de: ', salario )
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   })
//   .catch(err => console.log(err));


let nombre;


getEmpleado(id)
  .then(empleado => {
    nombre = empleado;
    return getSalario(id)
  })
  .then(salario => console.log('El empleado: ', nombre, 'tiene un salario de: ', salario))
  .catch(err => console.log(err));