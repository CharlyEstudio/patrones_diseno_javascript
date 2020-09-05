const axios = require('axios')

// Creando Patrón Singletón
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// Patrón Adaptador
const adapter = {
  get: url => instance.get(url),
  post: (url, body) => instance.post(url, body),
  put: (url, body) => instance.put(url, body),
  delete: url => instance.delete(url)
}

// En vez de exportar instance, se exporta adapter
// Es más sencillo implementar el Patrón Adaptador con el Patrón de Inyección de Dependencias
module.exports = adapter
