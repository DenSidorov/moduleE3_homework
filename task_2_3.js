/*
Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает
число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function sum(num1) {    
    return (num2) => num1 + num2
}

const num1 = prompt('Введите 1 число: ')
const num2 = prompt('Введите 2 число: ')
const addNum2 = sum(+num1)
console.log(addNum2(+num2))