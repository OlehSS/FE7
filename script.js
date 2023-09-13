let user = {
    name: 'John',
    age: 30
}

// Задание 1: проверить пустой или нет

let keys = Object.keys(user);

let numberOfProperties = keys.length;

if(numberOfProperties > 0){
    console.log('Не пустой');
}
else{
    console.log('Пустой');
}

// Задание 1: проверить наличие свойства 'age'

if('age' in user){
    console.log('age присутствует');
}
else{
    console.log('age отсутствует');
}

// Задание 2:

let product = {
    productName: '',
    productPrice: ''
}

// Задание 3:

product.productQuantity = '';
product.productQuality = '';

// Задание 4:

delete product.productQuality;

console.log(product);

// Задание 5:

let menu = {
    width: 200,
    height: 300,
    title: "my menu"
}

function doubled(a){
    return a * 2;
}

for(let i in menu){
    if(typeof(menu[i]) == 'number'){
        menu[i] = doubled(menu[i]);
    }
}

console.log(menu);

// Задание 6: 

function checkNumbers(a, b){
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    else{
        return 0;
    }
}

console.log(checkNumbers(42, 42));

// Задание 7:

function comparison(a, b){
    if(a % 2 == 0 && b % 2 == 0){
        return a * b;
    }
    if(a % 2 != 0 && b % 2 != 0){
        return a + b;
    }
    if(a % 2 == 0 && b % 2 != 0){
        return b;
    }
    else{
        return a;
    }
}

console.log(comparison(17, 6));