/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15  // statement

const myObject = {
  x: 10,
  y: true,
} //expression

myObject.z = 'abc' //expression

delete myObject.x //expression

let newVariable // statement

newVariable = 30 + 5 //expression

console.log(newVariable) //expression

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}  //expression
