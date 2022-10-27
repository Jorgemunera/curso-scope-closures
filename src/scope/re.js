var firstName;//cuando se declara asi, se le asigna un valor undefined
firstName="oscar";
console.log(firstName);

var lastName='david';
lastName='Ana'; //estamos reasignando nuevamente un valor
console.log(lastName);

var secondName='david';
var secondName='Ana';//estamos redeclarando y reasignando una variable y un valor
console.log(secondName);

//ejemplo let

let fruit='apple'; //declarar y asignar
fruit='kiwi';//si se puede reasignando
let fruit='banana';//no se puede redeclarar las variables y reasignar

//ejemplo const
const animal='dog';//declara y asigna
animal='cat';//no se puede reasignar
const animal='snake';//no se puede redeclarar y reasignar
console.log(animal);//no se puede re asignar un valor a una const

const vehicles=[];//declarando un array con const
vehicles.push("carro1");//agregamos un elemento al array
console.log(vehicles);//nos muestra el elemento

vehicles.pop();//sacamos el elemento del array
console.log(vehicles);//nos muestra el array vacio
//aqui vemos que a pesar de que es const podemos modificar de alguna manera los valores de esa constante, asi que const no es inmutable