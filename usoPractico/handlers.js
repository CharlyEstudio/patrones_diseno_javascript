// Creando Patrón de Inyección de Dependencias
module.exports = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get('/users')
    return res.send(data)
  }
})
