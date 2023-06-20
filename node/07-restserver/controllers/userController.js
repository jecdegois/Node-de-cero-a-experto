const { response, request} = require('express') // esto es para tener auto completado
const User = require('../models/usuario');
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

const postUser =  async(req, res = response) => {
  
  const body = req.body;
  const user = new User(body)
  await user.save();

  res.json({
    msg: 'post API',
    user
    
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