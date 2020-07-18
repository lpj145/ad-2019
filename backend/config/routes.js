const personsActions = require('../src/actions/persons')

/**
 * @param {fastify} httpServer
 */
const setupRoutes = (httpServer) => {
  httpServer.get('/persons', personsActions.list)
  httpServer.post('/persons', personsActions.add)
  httpServer.put('/persons/:personid', personsActions.edit)
  httpServer.delete('/persons/:personid', personsActions.delete)

  httpServer.get('/persons/playgame', personsActions.sortToGame)
}

module.exports = setupRoutes
