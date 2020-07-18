const database = require('../../config/database')
const sendMailToPersons = require('./SendMailToPerson')
const MODEL = 'person'

function rangeNumberTo (toNumber) {
  return Math.floor(Math.random() * toNumber)
}

function getModel() {
  return database.getModel(MODEL)
}

module.exports = {
  getPerson (personId) {
    if (personId === '') {
      return null
    }
    return getModel().findById(personId)
  },
  listAllPersons () {
    return getModel().find()
  },
  addPerson (data) {
    return database.newEntity(MODEL, data).save()
  },
  editPerson (personid, data) {
    return getModel().updateOne({ _id: personid }, data).exec()
  },
  deletePerson (personid) {
    return getModel().deleteOne({ _id: personid }).exec()
  },
  async sortPersonsToGame () {
    const persons = await getModel().find().exec()
    persons.map((person) => {
      const arrayPosition = rangeNumberTo(persons.length)

      if (persons[arrayPosition] !== person) {
        person.friend = persons[arrayPosition].name
        person.save()
        sendMailToPersons(person, persons[arrayPosition])
      }
      return person
    })
  }
}
