const PersonsServices = require('../services/PersonsServices')

const HTTP_NO_CONTENT = 204
const HTTP_NOT_FOUND = 404

const actions = {
  async list () {
    return await PersonsServices.listAllPersons()
  },
  async add ({ body }) {
    const person = await PersonsServices.addPerson(body)
    return { person }
  },
  async edit ({ body, params }, response) {
    const person = await PersonsServices.getPerson(params.personid)
    if (person === null) {
      response.code(HTTP_NOT_FOUND)
      return 'Resource Not Found.'
    }
    PersonsServices.editPerson(person._id, body)
    response.code(HTTP_NO_CONTENT)
    return {}
  },
  async delete ({ params }, response) {
    const person = await PersonsServices.getPerson(params.personid)
    if (person === null) {
      response.code(HTTP_NOT_FOUND)
      return 'Resource Not Found.'
    }
    response.code(HTTP_NO_CONTENT)
    PersonsServices.deletePerson(person._id)
    return {}
  },
  async sortToGame () {
    PersonsServices.sortPersonsToGame()
    return 'All Sended'
  }
}

module.exports = actions
