import React from 'react'
import {
  Popover,
  Button,
  Icon,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '10px',
    backgroundColor: '#363636',
    color: '#f3f3f3'
  },
}));

export default function({ refreshAction }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  
  const open = Boolean(anchorEl)

  return (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={refreshAction}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
      >
          <Icon>
            sync_alt
          </Icon>
      </Button>
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>Refresh List</Typography>
      </Popover>
    </React.Fragment>
  )
}
