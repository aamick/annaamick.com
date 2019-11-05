import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  layout: {
    background: 'url("/photos/mountain.jpg") top center no-repeat',
    backgroundPositionY: '-100px',
    backgroundAttachment: 'fixed',
    overflow: 'hidden'
  },
  title: {
    webkitTextStroke: '1px #445963',
    color: 'white',
    textShadow: `3px 3px 0 #445963,
     -1px -1px 0 #445963,  
      1px -1px 0 #445963,
      -1px 1px 0 #445963,
       1px 1px 0 #445963`
  }
}))

export default ({ children, pageTitle }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <Box className={classes.layout}>
        <NavBar />

        <Box
          pt={4}
          pb={1}
          display="flex"
          fontSize={20}
          textAlign="center"
          justifyContent="center"
          className={classes.title}>
          <h1>{pageTitle}</h1>
        </Box>
        {children}
        <Footer />
      </Box>
    </Container>
  )
}
