const express = require('express')

// Aplicando el Patrón Singleton
const services = require('./servicios')

const handlify = require('./handlers')
// Aplicando Patrón Currying
const userHandlers = handlify('users')
const postHandlers = handlify('posts')

const parser = require('body-parser')
const app = express()

app.use(parser.urlencoded({ extended: false }))

app.use(parser.json())

const port = 3000

// Aplicando Patrón de Inyección de Dependencias
// y se está aplicando el Patrón de Composición, ya que,
// si queremos eliminar un método, la aplicación sigue funcionando
app.get('/', userHandlers(services).get)
app.post('/', userHandlers(services).post)
app.put('/:id', userHandlers(services).put)
app.delete('/:id', userHandlers(services).delete)
app.get('/posts', postHandlers(services).get)
app.post('/posts', postHandlers(services).post)
app.put('/posts/:id', postHandlers(services).put)
app.delete('/posts/:id', postHandlers(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
