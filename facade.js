const https = require('https')
const {resolve} = require('dns')

// 'jsonplaceholder.typicode.com'

const get = url => new Promise((res, rej) => {
  const comp = url.split('/')

  const host = comp.shift()

  const options = {
    hostname: host,
    path: `/${comp.join('/')}`,
    method: 'GET'
  }

  const req = https.request(options, resp => {
    resp.setEncoding('utf8')
    let body = ''
    resp.on('data', d => {
      body += d
    })

    resp.on('end', d => {
      const parsed = JSON.parse(body)
      res(parsed)
    })
  })

  req.on('error', e => {
    rej(e)
  })

  req.end()
})

const main = async () => {
  const resultado = await get('jsonplaceholder.typicode.com/users')
  console.log('Resultado: ')
  console.log(resultado)
}

main()
