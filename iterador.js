function* iterador(col) {
  var nextIdenx = 0

  while (nextIdenx < col.length) {
    yield col[nextIdenx++]
  }
}

const x = [1, 2, 3, 4, 5, 6, 7]
const gen = iterador(x)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
