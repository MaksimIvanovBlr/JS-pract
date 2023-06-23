/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'Audi',
    price: 56000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Toyota',
    price: 88000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Lada',
    price: 12000,
    isAvailableForSale: true,
  },
]

const newCar = {
  carBrand: 'Volvo',
  price: 65000,
  isAvailableForSale: true,
}

cars.push(newCar)

console.log(cars)
