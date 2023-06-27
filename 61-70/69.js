/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь
const mult = (obj) => {
  const valuseOfObject = Object.values(obj)
  const multiply = valuseOfObject.reduce((a, b) => a * b, 1)
  return multiply
}

const result = mult(objectWithNumbers)
console.log(result)
// 300
