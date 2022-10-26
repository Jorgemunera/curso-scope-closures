//variables

var a; //declaramos la variable a
var b= 'b'; //delcaramos y asignamos
b= 'bb'; // estamos reasignando
var a= 'aa'; //estamos redeclaracion

//Global scope
var fruit = 'Apple' //global

function bestFruit(){
    console.log(fruit)
}

bestFruit();

//
function countries(){
    country='colombia'; // aqui dentro de la funcion estamos delarandola de manera global
    console.log(country)
}

countries();
console.log(country)