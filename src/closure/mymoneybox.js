// function moneyBox(coins){
//     let saveCoins=0;
//     saveCoins += coins;//asignar en forma de adicion 
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(2);
// moneyBox(1);
//de esta primer manera nuestra alcancia no funciono ya que no guarda los valores anteriores

function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();//creamos una closure para poder acceder a esa variable por el ambito lexico para despues poder hacer la adicion
myMoneyBox(5);
myMoneyBox(24);
myMoneyBox(15);

const moneyBoxAna=moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);