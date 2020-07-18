import React from 'react'

import {
  Box,
  TextField,
  Button,
  Grid
} from '@material-ui/core'

const submitForm = (event, callback) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = {}
  for(let fieldName of formData.keys()) {
    data[fieldName] = formData.get(fieldName)
  }

  return callback(data)
}

export default function({ onSubmit, onCancel, person = { _id: null, name: '', email: '' } }) {
  return (
    <form onSubmit={(e) => submitForm(e, onSubmit)}>
      <input type="hidden" name="id" defaultValue={person._id} />
      <Box mb={2}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          variant="filled"
          defaultValue={person.name}
          mb={2}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          variant="filled"
          defaultValue={person.email}
        />
      </Box>
      <Grid container justify="flex-end">
        <Grid item>
          <Button onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            type="submit"
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
