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

const salarios = [
    {
        id:1,
        nombre: 1000
    },
    {
        id:2,
        nombre: 1500
    },
    {
        id:3,
        nombre: 2000
    }
]

const getEmpleado = (id) =>{
    return new Promise((resolve, reject)=>{

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve (empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}


const getSalario = (id) =>{
    return new Promise((resolve, reject)=>{

        const salario = salarios.find(e => e.id === id)?.nombre;

        (salario)
            ? resolve (salario)
            : reject(`No existe salario con id ${id}`);
    });
}




id = 2;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));


// getEmpleado(id)
//     .then(empleado => {

//         getSalario(id)
//             .then(salario => {

//                 console.log('El empleado: ', empleado , ' tiene el salario: ' ,salario)
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id); //sin este return, no se puede encadenar otra promesa (osea agregarle otro then a continuacion)
    })
    .then(salario => console.log('El empleado: ', nombre , ' tiene el salario: ' ,salario))
    .catch(err => console.log(err));