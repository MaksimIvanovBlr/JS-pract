/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

//
console.log(firstFunction(2, 3)) //can be called before declaration
function firstFunction(a, b) {
  return a + b
}
// in this case we can assign a new value
// firstFunction = 'new value'
// console.log(firstFunction)

const secondFunction = function (a, b) {
  return a + b
}
//
// secondFunction = "we can't assign a new value"
// console.log(secondFunction)

console.log(firstFunction(2, 3))
console.log(secondFunction(2, 3))
