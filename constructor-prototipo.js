/*class MiClase {
  constructor(p1, p2) {
    this.propiedad = p1
    this.propiedad2 = p2
  }
  metodo(text) {
    // soy un método de prototipo
    console.log(`Mensaje: ${text}`)
  }
}

const instancia = new MiClase(4, 2) // Podemos inyectar propiedas a las clase
console.log(instancia)
console.log(instancia.metodo('Saludos desde el método'))*/

Object.prototype.log = function () {
  console.log(this)
}

const x = { a: 1 }

x.log()

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, "")
    } catch (e) {
      console.log(e)
      return this
    }
  }
}

const y = "       lala       ".trim()
y.log()
