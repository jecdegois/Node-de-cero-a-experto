const http = require("http");


/* http.createServer( ( req, res ) => {

 //console.log(req)

   if(req.url === '/nosotros'){
    res.write('nosotros')
    res.end()
  } 

   res.writeHead(200, {'content-type': 'application/json'}); 
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  res.writeHead(200, {'content-type': 'application/csv'}); 
   res.write(JSON.stringify({
    msg: 'prueba'
  })) //write siempre recibe un texto, hay que transformar texoto stringify

  res.write('id', Nombre')
  res.write('1', Jose')
  res.write('2', Marianys')
  res.write('3', Gabana')
  res.end()

})
.listen(8080); */

http.createServer((req,res) => {
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  res.writeHead(200, {'content-type': 'application/csv'}); 

  res.write('id; nombre\n');
  res.write('1; Jose\n');
  res.write('2; Marianys\n');
  res.write('3; Gabana\n');
  res.end();
}).listen(8080);

console.log(`Escuchando en el puerto ${8080}`)