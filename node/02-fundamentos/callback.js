



// setTimeout(() => {
//   console.log('Hola mundo');
// }, 1000);


const getUsuarioById = (id, callback) => {
  const usuario = {
    // id: id // es redundar, en js moderno
    id,
    nombre: 'Jose'
  }

  setTimeout(() => {
    callback(usuario);
  }, 1500)
}

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});