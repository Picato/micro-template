const { hello, notfound } = require('./controler')
const { router, get } = require('microrouter')


module.exports = router(
  get('/hello/:who', hello),
  get('/*', notfound)
)
