// Задача 2
// const firstNum = Number.parseFloat(prompt('Введите первое число: ')); 
// const secondNum = Number.parseInt(prompt('Введите первое число: '));
// alert(`Результат сложения чисел ${firstNum} и ${secondNum} равен ${sum(firstNum,secondNum)}`);
// function sum(a,b){
//     return a+b;
// }

// Задача 4
// let question=confirm("Вам хорошо живется? ");
// if(question==true){
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Держитесь');
// }

// let question=confirm("Вам хорошо живется? ");
// // if(question){
// //     alert('Тогда мы идем к вам!');
// // } else {
// //     alert('Держитесь');
// // }

// question ? alert('Тогда мы идем к вам!') : alert('Держитесь');

// const product = prompt("what product: ");//.toLowerCase();
// switch (product){
//     case "Mandarin":
//         alert ('Mandarin costs 100/kg');
//         break;
//     case "Banana":
//         alert ('Banana and pear cost 70/kg');
//         break;    
//     case "Pear":
//         alert ('Banana and pear cost 70/kg');
//         break;
//     default:
//         alert('no such product');
// }

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(getMaxEvenElement([4, -12, 29, 6, 13, 92, -50]));

const userInput = prompt("Введите числа через запятую: ").split(',').map(function (value) { return Number.parseFloat(value) });
// const userInput = prompt("Введите числа через запятую: ").split(',').map(Number.parseFloat(value));
console.log(userInput);
const result = getMaxEvenElement(userInput);
console.log(result);
alert(result);

// console.log(getMaxEvenElement(userInput));