import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../Layout'

const useStyles = makeStyles({
  media: {
    width: '100%',
    minWidth: '200px',
    maxWidth: '450px'
  },
  greeting: {
    webkitTextStroke: '1px #445963',
    color: 'white',
    textShadow: `3px 3px 0 #445963,
     -1px -1px 0 #445963,  
      1px -1px 0 #445963,
      -1px 1px 0 #445963,
       1px 1px 0 #445963`
  }
})

function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <Container>
        <Box
          component="span"
          display="block"
          justifyContent="center"
          p={1}
          m={1}
          textAlign="center"
          className={classes.greeting}
          fontSize={25}>
          <h1>Hi! I'm Anna&nbsp;Amick</h1>
        </Box>
        <Box display="flex" flexWrap="wrap" p={1} m={1} justifyContent="center" alignItems="center">
          <Box p={1} bgcolor="background.default">
            <img src="/photos/lake-mi.jpg" border={8} alt="background" className={classes.media} />
          </Box>
          <Box
            className={classes.greeting}
            justifyContent="center"
            px={4}
            mt={9}
            textAlign="center"
            alignItems="center">
            <h2>
              Web Designer and Front-end Developer <br />
              based in Indianapolis, Indiana
            </h2>
          </Box>
          <Box
            p={2}
            height="auto"
            m={3}
            textAlign="center"
            flexWrap="wrap"
            alignItems="end"
            bgcolor="primary.dark">
            <h4>
              I am a self-motivated, organized, and fast learning Entry-Level Web Developer. After
              serving six years in the Army Military Police and a year in Afghanistan, I completed
              my degree taking special interest in community relations, leadership, computer
              science, and project management. I have been studying web programming for the last
              year and hope to continue my education on the job while providing value for the right
              organization.
            </h4>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
