import React from 'react'
import Container from '@material-ui/core/Container'

import {
  PersonsService
} from './app/services'

import {
  PersonsTable,
  PersonDialog,
} from './app'

import {
  MenuTop,
} from './ui'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      openedPersonDialog: false,
      person: {}
    }
  }

  async getAllPersonsFromApi() {
    this.setState({
      persons: await PersonsService.getAllFriends()
    })
  }

  async addOrUpdatePerson({ id = null, name, email }) {
    if (id === null) {
      try {
        const {person} = await PersonsService.addPerson(name, email)
        this.setState(({ persons }) => ({
          persons: [...persons, person]
        }))
        this.closeDialog()
      } catch (error) {
        console.log(error)
      }
      return
    }

    try {
      await PersonsService.editPerson(id, name, email)
      this.setState({person: {}})
      this.closeDialog()
      this.getAllPersonsFromApi()
    } catch (error) {
      console.log(error)
    }
  }

  async removePerson(personid) {
    try {
      await PersonsService.deletePerson(personid)
      this.getAllPersonsFromApi()
    } catch (error) {
      console.log(`User with person id: ${personid} cannot removed.`);
      console.log(error)
    }
  }

  async playGame() {
    if (this.state.persons.length > 0) {
      await PersonsService.sortFriends()
      this.getAllPersonsFromApi()
    }
  }

  componentDidMount() {
    this.getAllPersonsFromApi()
  }

  openDialog(person = {}) {
    this.setState({
      openedPersonDialog: true,
      person
    })
  }

  closeDialog() {
    this.setState({
      openedPersonDialog: false,
      person: {}
    })
  }

  render() {
    return (
      <Container maxWidth="md">
        <MenuTop
          clickSyncAction={this.getAllPersonsFromApi.bind(this)}
          clickAddAction={this.openDialog.bind(this)}
          clickPlayGame={this.playGame.bind(this)}
        />
        <PersonsTable
          persons={this.state.persons}
          clickRemoveAction={this.removePerson.bind(this)}
          clickEditAction={this.openDialog.bind(this)}
        />
        <PersonDialog
          opened={this.state.openedPersonDialog}
          onClose={this.closeDialog.bind(this)}
          onSubmit={this.addOrUpdatePerson.bind(this)}
          person={this.state.person}
        />
      </Container>
    )
  }
}

export default App;
