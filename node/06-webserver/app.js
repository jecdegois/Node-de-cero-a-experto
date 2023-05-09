const express = require('express');
const app = express();
const port = 8080;

// middelware, son una funcion que se ejecuta antes de hacer otra cosa

//Servir contenido estatico

app.use( express.static('public') );

//la carpeta publica tiene prioridad sobre las rutas que definas


 app.get('/', ( req,res )  => {
  res.send('Hola mundo')
})
 

app.get('hola-mundo', ( req,res )  => {
  res.send('Hola mundo PAGINA')
})


/* app.get('*', ( req,res )  => {
  res.send('404 | Page not found')
}) */

app.get("*", (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
})


app.listen(port, () => {
  console.log(`App is listening at port: ${port}`)
})