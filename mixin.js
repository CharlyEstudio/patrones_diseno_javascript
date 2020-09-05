// Mixin
let mixin = {
  saludar() {
    console.log(`Hola ${this.nombre}`)
  },
  despedir() {
    console.log(`Chao ${this.nombre}`)
  }
}

// Clase
class Usuario {
  constructor(nombre) {
    this.nombre = nombre
  }
}

// Aumentamos el prototipo
Object.assign(Usuario.prototype, mixin)

const usuario = new Usuario('Chanchito feliz')
usuario.saludar()
