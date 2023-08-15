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

const id = 2;

const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`
    } catch (error) { 
        return error;  
    }
}



getInfoUsuario(id)
    .then (msg => {
        console.log('Todo bien!')
        console.log(msg)
    })
    .catch(err => {
        console.log('Todo mal!')
        console.log(err)
    })