class MiClase {
  constructor(p1, p2) {
    this.propiedad = p1
    this.propiedad2 = p2
    this.metodo = text => {
      // soy un método
      console.log(`Mensaje: ${text}`)
    }
  }
}

const instancia = new MiClase(4, 2) // Podemos inyectar propiedas a las clase
console.log(instancia)
console.log(instancia.metodo('Saludos desde el método'))
