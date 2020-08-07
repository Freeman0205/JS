'use strict'


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// alert("Hello world");

// let answer = confirm("Are you here");

// console.log(answer);

// let answer = prompt("Есть ли вам 18", "Да");

// console.log(typeof(arr));

// console.log('arr' + 'bus');

// let incr = 10,
//     decr = 10;



// console.log(incr++);
// console.log(decr--);

// console.log("2" == 2);

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM_DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: {},
    timeData: time,
    savings: false,
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.budget / 30);