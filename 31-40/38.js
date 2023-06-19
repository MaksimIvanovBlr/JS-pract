/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
    if (inputArray.length > 0) {
      return 'Массив не пустой'
    } else {
      return 'Массив пустой'
    }
  }

  function isArrayEmptyWithoutElse(inputArray) {
    if (inputArray.length > 0) {
      return 'Массив не пустой'
    } 
    return 'Empty'
  }

  function isArrEmptytern(inputArray) {
    return inputArray.length > 0 ? 'Not empty' : 'Empty'
  }

  const emptyArr = (inputArray) => {
    return inputArray.length > 0 ? 'Not empty' : 'Empty'
  }
  
  console.log(isArrayEmpty([1, 3]))
  console.log(isArrayEmpty([]))

  console.log(isArrayEmptyWithoutElse([1, 3]))
  console.log(isArrayEmptyWithoutElse([]))

  console.log(isArrEmptytern([1, 3]))
  console.log(isArrEmptytern([]))