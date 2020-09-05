// Creando Patrón de Inyección de Dependencias
// y Patrón Currying
module.exports = resource => ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(`/${resource}`)
    return res.send(data)
  },
  post: async (req, res) => {
    const { data } = await axios.post(`/${resource}`, req.body)
    return res.send(data)
  },
  put: async (req, res) => {
    const { data } = await axios.put(`/${resource}/${req.params.id}}`, req.body)
  },
  delete: async (req, res) => {
    const { data } = await axios.get(`/${resource}/${req.params.id}`)
    return res.sendStatus(204)
  }
})
