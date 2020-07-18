import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    Icon
} from '@material-ui/core'

import RefreshListButton from './RefreshListButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ clickSyncAction, clickAddAction, clickPlayGame }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" className={classes.title}>
            App Game
          </Typography>
          <RefreshListButton refreshAction={clickSyncAction} />
          <Button
            color="inherit"
            onClick={clickAddAction}
          >
              Add Friend
              <Icon>
                add_circle_outline
              </Icon>
          </Button>
          <Button
            color="inherit"
            onClick={clickPlayGame}
          >
            Play Game!
            <Icon>
              play_circle_outline
            </Icon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
