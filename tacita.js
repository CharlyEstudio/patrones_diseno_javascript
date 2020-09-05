const f = (ruta, cb) => {
  // Muuuuuuchas líneas despues
  const resultado = computacionPesada()

  cb(resultado)
}

// Un ejemplo práctico es cuando trabajamos con express
app.get('/users', (req, res) => {
  //
})

// f es como si fuera app, así se crea
// por concepto de prubeas unitarias lo mejor es desacoplar el callback, como se muestra el ejemplo
const manejaResultado = (req, res) => {
  //
}
f('/users', manejaResultado)
// Este sería la mejor forma de implementar, por el concepto de pruebas unitarias


