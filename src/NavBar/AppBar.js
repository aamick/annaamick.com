import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: theme.palette.background.default
  }
}))

const AppBar = ({ toggleDrawer }) => {
  const classes = useStyles()

  return (
    <MuiAppBar color="inherit" position="fixed" className={classes.AppBar}>
      <Toolbar variant="regular">
        <Box flexGrow={1}>
          <Typography variant="h6" color="inherit">
            Welcome
          </Typography>
        </Box>
        <IconButton onClick={toggleDrawer()} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
