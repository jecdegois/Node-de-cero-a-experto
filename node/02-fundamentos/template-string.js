

const nombre = 'Deadpool';

const real = 'Wade Wilson';

const normal = nombre + ' ' + real ;

const template = `${nombre} ${real}`;


console.log(normal); // 'Deadpool Wade Wilson'

console.log(template); // 'Deadpool Wade Wilson'

const html = `
<h1>Hola</h1>
<h2>Mundo</h2>

`;

console.log(html);

console.log(normal === template); //true