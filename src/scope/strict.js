
pi=3.1416;//asignando valor sin antes declarar
console.log(pi);//muestra el valor de pi porque? lo que hizo la logica dentro de javascript fue declarar una variable como undefined

'use strict';//con el uso de use strict o el modo estricto al inicio del codigo, estamos diciendo que ya no vamos a hacer uso del hoisting y la elevacion de las variables

function myFunction(){
    'use strict';
    return pi=3.1416;
}
console.log(myFunction())//usando el modo estricto dentro de mi funcion tampoco puedo ver ese valor de pi porque no ha sido declarada