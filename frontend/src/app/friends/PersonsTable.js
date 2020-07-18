import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  Button,
  Icon
} from '@material-ui/core'

export default function ({ persons = [], clickEditAction, clickRemoveAction }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Friend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => (
            <TableRow key={`row-${person._id}`}>
              <TableCell>
                <ButtonGroup color="primary" variant="contained">
                  <Button
                    size="small"
                    onClick={() => clickEditAction({edit: true, ...person})}
                  >
                    <Icon>edit</Icon>
                  </Button>
                  <Button
                    size="small"
                    onClick={() => clickRemoveAction(person._id)}
                  >
                    <Icon>close</Icon>
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.friend}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
