const express = require('express')
const axios = require('axios')
const { get } = require('./hanlders')
const app = express()
const port = 3000

// Se inyecto la dependencia de Axios
app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
