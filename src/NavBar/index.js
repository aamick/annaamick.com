import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'

import AppBar from './AppBar'
import DrawerMenu from './DrawerMenu'

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <AppBar position="static" toggleDrawer={toggleDrawer} />
      <Toolbar />
      <DrawerMenu toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </>
  )
}
