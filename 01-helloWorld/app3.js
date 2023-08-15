//Todas estas son instrucciones Sincronas, son non-blocking. Porque su contenido no es bloqueante
//los va mandando a una pila de instrucciones por eso el orden dado los settimout despues del console.log() por su tipo
console.log("Inicio de programa"); //1


setTimeout(()=>{
    console.log("Primer Timeout"); //5
},3000);


setTimeout(()=>{
    console.log("Segundo Timeout"); //3
},0);


setTimeout(()=>{
    console.log("Tercer Timeout"); //4
},0);


console.log("Fin de programa"); //2