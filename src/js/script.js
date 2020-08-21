'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    optIncome = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    
    mustExpenses = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    dayBudgetBtn = document.getElementsByTagName('button')[2],
    totalBtn = document.getElementsByTagName('button')[3],
    inputOptExpenses = document.querySelectorAll('.optionalexpenses-item'),
    inputOptIncome = document.querySelectorAll('.choose-income'),
    accumulationCheck = document.querySelectorAll('#savings'),
    sumValue = document.querySelectorAll('.choose-sum'),
    percentValue = document.querySelectorAll('.choose-percent'),
    yearValue = document.querySelectorAll('.year-value'),
    monthValue = document.querySelectorAll('.month-value'),
    dayValue = document.querySelectorAll('.day-value');
    



let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("Неверно введены данные!");
                i--;
            }
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay + "руб.");
    },

    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }        
    },
    chooseIncome: function() {
        let i = 0;
        while (i < 1) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if ((typeof(items)) === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                console.log("Неверно введены данные");
                i--;
            }
            i++;
        }

                 // alternative forEach 
        // appData.income.forEach (function (itemmassive, i) {
        //     alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        // }); 

        appData.income.forEach (function (itemincome, i) {
            alert("Способы доп. заработка: " + (i + 1) + ' ' + itemincome);
        });
    }
    

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);

}








//   Two alternative cycles

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Неверно введены данные!");
//         i--;
//     }    
//     i++;
// }
// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("Неверно введены данные!");
//         i--;
//     }
//     i++;
// }
// while (i < 2);














    
