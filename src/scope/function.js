function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName==='Ana'){
        console.log(`Hello ${userName}!`)
    }
}

greeting();

console.log(userName) //aqui nos muestra un error ya que tenemos function scope porque no esta definida como global y solo vive dentro de la funcion
