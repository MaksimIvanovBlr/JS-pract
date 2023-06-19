/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
  ]
  
// const objArr = []
// postsJSON.forEach((obj)=> objArr.push(JSON.parse(obj)))

const objArr = postsJSON.map(JSON.parse)
console.log(objArr);
console.log(objArr[1].postId);
console.log(objArr[objArr.length-1].commentsQuantity);