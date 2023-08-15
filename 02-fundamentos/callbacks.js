// No es mas que una funcion que se mnada como argumento

const getUsuarioByID = (id, callback) => {

    const user ={
        id,
        nombre:'Matias'
    }

    setTimeout(()=>{
        callback(user);
    }, 1500);

}


getUsuarioByID(10, ()=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})