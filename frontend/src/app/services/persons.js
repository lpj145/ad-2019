import { httpClient } from '../../lib'

export default {
  getAllFriends() {
    return httpClient.get('/persons')
      .then(d => d.data)
  },
  addPerson(name, email) {
    return httpClient.post('/persons', { name, email })
      .then(d => d.data)
  },
  editPerson(personid, name, email) {
    return httpClient.put(`/persons/${personid}`, {name, email})
  },
  deletePerson(personid) {
    return httpClient.delete(`/persons/${personid}`)
  },
  sortFriends() {
    return httpClient.get('/persons/playgame')
      .then(d => d.data)
  }
}
