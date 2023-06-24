/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// ТЕСТ 1
const templateLiteral = (num) => {
  return num < 10
    ? `Number ${num}.\n This number is less then 10.\n The square root of this number is - ${Math.sqrt(
        num
      )}`
    : `Number ${num}\n This number is greate then or equal to 10\n The square root of the number is - ${Math.sqrt(
        num
      )}`
}
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
