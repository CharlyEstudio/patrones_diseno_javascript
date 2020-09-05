const result = (() => {
  const x = {}

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

// Este es una forma "ifi"
// El valor de x es privado y no se puede obtener directamente, es una API privada

result.a()
result.b('queso', 'vaca')
result.a()

// Ejemplo Práctico
const Users = (() => {
  const path = '/users'

  return {
    listar: async () => {
      return await fetch(path).then(x => x.json()).then(x => x)
    },
    crear: async (data) => {
      return await fetch(path, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json()).then(x => x)
    }
  }
})()
// En este momento no va a funcionar por que no tenemos exportado Fetch y al igual el PATH no existe ese endpoint,
// pero este sería un caso práctico
