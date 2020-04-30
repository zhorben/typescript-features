// const period = 60
// const baseUrl = 'http://localhost'

// const firstName = 'Ihor'
// const account = {
//   firstName,
//   getName() {
//     return this.firstName
//   }
// }

// const person = {...account}
// const dates = {...[11, 12, 13]}

// let {firstName: myName} = person
// const [firstDate] = dates

// for (let date of dates) {
//   console.log(date)
// }

// let sum = (a: number, b: number) => a + b

// class Point {
//   x!: number;
//   y!: number;
// }

// function userMessage([start, end]: TemplateStringsArray, { firstName: name }: typeof account) {
//   return `${start}${name}${end}`
// }

// console.log(userMessage`Good day, ${person} !!`)

/// reference lib="esnext"
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function* getItemsReallySlow<T>(items: Iterable<T>): AsyncIterableIterator<T> {
  for (const item of items) {
    await sleep(1000)
    yield item
  }
}

export async function speakSloth(items: String[]) {
  for await (const item of getItemsReallySlow(items)) {
    console.log(item)
  }
}