const fs = require('fs');

const crearArchivo = async(base) => {

    try {
        console.log('===================');
        console.log(`   Tabla del ${base}:`);
        console.log('===================');
    
        let salida = '';
    
        for(let i = 1; i <= 10; i++){
            salida += `${ base } x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
        
        } catch (error) {
            throw error;
        }


    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;

    //     console.log(`tabla-${base}.txt creado`);
    // })
}


module.exports = {
    crearArchivo
}