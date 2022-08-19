
const fs = require('fs');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        let nombreArchivo = `tabla-${ base }.txt`;
        let ruta = `./salida/${nombreArchivo}`;

        salida += '====================\n';
        salida += ` Tabla del: ${ base } \n`;
        salida += '====================\n';

        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${i} = ${base *i}\n`;
        }

        if ( listar ) console.log(salida);

        fs.writeFileSync( ruta, salida );

        return nombreArchivo;

    } catch ( error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}