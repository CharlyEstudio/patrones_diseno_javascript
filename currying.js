// Función normal ArrowFunction
// const suma = (a, b) => a + b

// función Currying
const suma = a => b => a + b

// Ejecución de función normal
// suma(1, 5)

// Ejecución de función Currying
const suma1 = suma(1)
suma1(5)

// Usando en una composición
const users = [
  { edad: 18, nombre: 'Charly', apellido: 'Ramirez' },
  { edad: 18, nombre: 'Berenice', apellido: 'Acosta' },
  { edad: 10, nombre: 'Danna', apellido: 'Ramirez' },
  { edad: 10, nombre: 'Paulina', apellido: 'Ramirez' }
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

// Alternativa de Compose
// Pipe
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

// Para Debuggear
const trace = x => y => console.log(x, y)

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traerPrimerInfante = compose(
  trace('Después del Filter (Compose): '),
  formato,
  formateo,
  head,
  filter(x => x.edad < 2)
)

const traerPrimerInfantePipe = pipe(
  filter(x => x.edad < 2),
  head,
  formateo,
  formato,
  trace('Después de Lala (Filter)'),
)
traerPrimerInfante()(users)
