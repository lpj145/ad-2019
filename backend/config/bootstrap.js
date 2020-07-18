require('dotenv').config()
const database = require('./database')
const setupRoutes = require('./routes')
const setupCors = require('./cors')
const httpServer = require('fastify')({ logger: true })
require('./email').setupMailClient()

setupCors(httpServer)
setupRoutes(httpServer)

const startServer = async () => {
  console.log('Initializing restapi server.')

  try {
    await database.connect()
    await httpServer.listen(process.env.SERVER_PORT)
    httpServer.log.info(`Enjoy a web application at: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
  } catch (error) {
    httpServer.log.error(error)
    process.exit(1)
  }
}

module.exports = {
  startServer,
  httpServer
}
