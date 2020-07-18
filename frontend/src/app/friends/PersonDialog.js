import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

import PersonForm from './PersonForm'

export default function ({ opened, onSubmit, onClose, person = null }) {
  return (
    <Dialog open={opened}>
      <DialogTitle>
        { person._id ? 'Edit Friend' : 'Add Friend' }
      </DialogTitle>
      <DialogContent>
        <PersonForm
          onCancel={onClose}
          onSubmit={onSubmit}
          person={person}
        />
      </DialogContent>
    </Dialog> 
  )
}
