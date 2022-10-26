//las variables definidas dentro de un bloque solo pueden serr alcanzadas dentro de este bloque

//que es un bloque?: casi cualquier cosa que este dentro de llaves{}


function fruits(){
    if(true){
        var fruit1='Apple';//function scope
        let fruit2='kiwi'; //solo tendra block scope
        const fruit3='banana';//solo tendra block scope
        console.log(fruit2);
    console.log(fruit3);
    }
    console.log(fruit1);
    
}

fruits();
console.log(fruit1) //aqui hay error porque con var fruit1 solo vive dentro del function scope