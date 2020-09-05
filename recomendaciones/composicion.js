// Este sería un ejemplo de Herencia
class Persona {
  constructor() {

    this.nombre = 'Lala'

  }

  saludar() {
    console.log(`Hola! soy ${this.name}`)
  }
}

class Perro extends Persona {
  //
}

// Lo mejor es la Composición
const saludar = name => console.log(`Hola! soy ${name}`)
const despedir = name => console.log(`Adios ${name}!`)
const dormir = name => console.log(`Yo ${name} me dormí Zzzzz...`)

const persona = {
  nombre: 'Lala',
  saludar: () => saludar(personar.nombre)
}

class Persona {
  constructor() {
    this.nombre = 'Lala'
  }

  saludar() {
    saludar(this.nombre)
  }

  // Si no queremos que use despedir, simplemente lo borramos
  despedir() {
    despedir(this.name)
  }

  dormir() {
    dormir(this.name)
  }
}

class robot {
  constructor() {
    this.nombre = 'Robocito'
  }

  saludar() {
    saludar(this.nombre)
  }

  despedir() {
    despedir(this.name)
  }

  // En este caso no usaremos el método dormir, porque un robot no duerme
  // si usaramos la herencia, nos obligaría utilizar ese método
  // y en composición, solo lo eliminamos
  /*dormir() {
    dormir(this.name)
  }*/
}
