'use strict'

const { send } = require('micro')
const sequelize = require('./db')

module.exports = {
  
  hello: (req, res) => send(res, 200, `Hello ${req.params.who}`),
  
  find: (req, res) => {
    const id = req.params.id

    const user = await sequelize.model('user').findById(id)
    return user.email
  },
  
  notfound: (req, res) => send(res, 404, 'not found')
}