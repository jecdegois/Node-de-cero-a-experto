const deadpool = {
  nombre: 'Wade',
  apellido: 'Wilson',
  poder: 'Regeneracion',
  // getNombre: function() {
  //   return `${this.nombre} ${this.apellido} ${this.poder}`
  // }
  getNombre() {
    return `${ this.nombre } ${ this.apellido } ${ this.poder }`
  }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre);
// console.log(apellido);
// console.log(poder);

// const { nombre, apellido, poder, edad = 0} = deadpool; //esto es mas legible

// console.log(nombre, apellido, poder);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  // const { nombre, apellido, edad = 0, poder } = heroe;
  console.log(nombre, apellido, poder, edad);
};

// imprimeHeroe(deadpool);


const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0]; // Deadpool


// const [h1, h2, h3] = heroes; // las llaves desestructuran arrays
// console.log(h1, h2, h3);

const [, , h3] = heroes; // las comas obvian los otros espacios, es decir h3 = batman

console.log(h3);