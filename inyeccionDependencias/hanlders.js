// En donde dice "axios" se puede agregar mas dependencias
// ejemplo: module.exports.get = (axios, jwt...)...
module.exports.get = axios => async (req, res) => {

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  res.send(data)

}
