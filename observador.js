const user = new User()

const init = () => {
  user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
  // usuario inicio sesión
}

app.init()

// en algún lugar de nuestra app
const login = () => {
  // Lógica de inicio de sesión...
  // ...

  // luego:
  user.trigger('login')
}

login()
