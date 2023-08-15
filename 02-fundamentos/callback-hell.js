const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Marta'
    }
]

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)

    if (empleado){
        callback(null, empleado);
    } else {
        callback(`Empleada con id ${id} no exist`);
    }
}

getEmpleado(1, (err, empleado) => {
    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    console.log('Empleado existe!');
    console.log(empleado);
})