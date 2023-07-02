const percent = 5
const start = 1120
const years = 10
const arr = []

const growth = () => {
  let prof = start
  for (let index = 0; index < years; index++) {
    prof = prof + (prof * percent) / 100
    arr.push(prof)
  }
  return arr
}

growth()
arr.unshift(start)
arr.forEach((el, i) => {
  console.log(
    ` ${i + 1} year: ${el} . Difference = ${
      i === 0 ? 'start' : el - arr[i - 1]
    }`
  )
})
