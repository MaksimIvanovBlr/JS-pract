/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

setTimeout(() => console.log('Hello World', performance.now()), 5000)

setTimeout(() => {
    console.log('Hello World!', performance.now());
}, 5000);



