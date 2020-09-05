const perro = {
  raza: 'Perro',
  ladrar: function () {
    console.log(`Guauuu!...soun un ${ this.raza }`)
  }
}

// Usamos el prototipo en la creación de un nuevo objeto
const raza = Object.create(perro)

raza.ladrar()
raza.raza = 'Pug'
raza.ladrar()
