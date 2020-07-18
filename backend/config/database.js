const mongoose = require('mongoose')
const schemas = require('./schemas')

mongoose.connect(process.env.DATABASE_DSN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const databaseServer = mongoose.connection

module.exports = {
  getSchema (name) {
    if (schemas.$instances[name]) {
      return schemas.$instances[name]
    }

    if (!schemas[name]) {
      throw new Error(`${name} table not found on schemas.`)
    }

    schemas.$instances[name] = new mongoose.Schema(schemas[name])
    return schemas.$instances[name]
  },
  getModel (name) {
    return mongoose.model(name, this.getSchema(name))
  },
  /**
   * @return {mongoose.Model}
   * @param {String} name
   * @param {Object} data
   */
  newEntity (name, data) {
    return new (this.getModel(name))({ ...data })
  },
  connect () {
    console.log(`[DATABASE]: connecting to ${process.env.DATABASE_DSN}`)
    return new Promise((resolve, reject) => {
      databaseServer.on('error', () => {
        console.log(`[DATABASE]: Cannot connect to ${process.env.DATABASE_DSN}.`)
        reject(new Error('Cannot connect to database server.'))
      })
      databaseServer.on('open', () => {
        console.log('[DATABASE]: connected with success.')
        resolve()
      })
    })
  }
}
