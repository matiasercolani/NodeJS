const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    } 
}

// const {nombre, apellido, poder, edad = 0} = deadpool;

// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({nombre, apellido,poder, edad = 0}){
    nombre = 'Matias';
    console.log(nombre, apellido, poder, edad);
}


// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [, ,h3] = heroes;

console.log(h3);