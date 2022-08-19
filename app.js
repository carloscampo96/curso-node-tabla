const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();
// console.log(argv);
// console.log('base: yargs', argv.base);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( error => console.log(error) );

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');
// console.log( base );


// const base = 3;




