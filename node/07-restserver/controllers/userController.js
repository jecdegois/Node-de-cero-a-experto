const { response } = require('express') // esto es para tener auto completado

const getUser = (req, res = response) => {
  res.json({
    msg: 'toma API controladita'
  });
}

const putUser =  (req, res = response) => {
  res.json({
    msg: 'put API'
    
  });
}
const postUser =  (req, res = response) => {
  res.json({
    msg: 'post API'
    
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