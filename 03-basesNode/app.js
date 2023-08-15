const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require("yargs")
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

console.clear();


// console.log(process.argv);
console.log(argv);
// console.log('base: yargs', argv.base);{}
crearArchivo(argv.base)
    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


// console.log(process.argv);

// const [ , , arg3='base=5' ] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(base);
// console.log(arg3);
// const base = 8;

// crearArchivo(base)
//     .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));