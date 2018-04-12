'use strict'

const { send } = require('micro')

module.exports = {
  
  hello: (req, res) => send(res, 200, `Hello ${req.params.who}`),
  
  notfound: (req, res) => send(res, 404, 'not found')
}