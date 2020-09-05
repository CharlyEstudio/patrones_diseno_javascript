// Problemas en callbacks
const fn = () => {
  // Calback hell
  // Piramide de la muerte
  ajax(() => {
    ajax(() => {
      ajax(() => {
        //
      })
    })
  })
}

// El callback se solucionó con Promesas,
// pero tenía el error que no se sabía correctamente donde terminaba, en algunos casos
const fn1 = () => {
  ajax()
    .then(() => {
      return ajax()
    })
  // .
  // .
  // .
  // .
  // .
}

// Para el problema de las Promesas,
// sale Async / Await
const fn3 = async () => {
  const resultado = await ajax()
}
