const express = require('express')

// Aplicando el Patrón Singleton
const services = require('./servicios')

const handlers = require('./handlers')
const app = express()
const port = 3000

// Aplicando Patrón de Inyección de Dependencias
app.get('/', handlers(services).get)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
