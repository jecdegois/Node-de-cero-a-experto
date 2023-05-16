const { response, request} = require('express') // esto es para tener auto completado

const getUser = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: 'toma API controladita',
    query
  });
}

const putUser =  (req, res = response) => {


  const id = req.params.id
  res.json({
    msg: 'put API',
    id
    
  });
}
const postUser =  (req, res = response) => {
  
  const { name, age } = req.body;

  res.json({
    msg: 'post API',
    name,
    age
    
  });
}
const deleteUser =  (req, res = response) => {
  res.json({
    msg: 'delete API'
    
  });
}


module.exports = {
  getUser,
  putUser,
  postUser,
  deleteUser
}