import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import { Container } from '@material-ui/core'

import Layout from '../Layout'

const useStyles = makeStyles({
  button: {
    display: 'flex',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 3,
    borderColor: 'primary.main',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  label: {
    textTransform: 'capitalize'
  },
  name: {
    webkitTextStroke: '1px #445963',
    color: 'white',
    textShadow: `3px 3px 0 #445963,
     -1px -1px 0 #445963,  
      1px -1px 0 #445963,
      -1px 1px 0 #445963,
       1px 1px 0 #445963`
  }
})

const ContactBlurb = ({ startIcon, text, children }) => {
  const classes = useStyles()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box m={2}>
      <Button className={classes.button} startIcon={startIcon} onClick={handleClick}>
        {text}
      </Button>
      {show && (
        <Box p={3} clone>
          <Paper>{children}</Paper>
        </Box>
      )}
    </Box>
  )
}

export default function ContactInfo() {
  const classes = useStyles()

  return (
    <Layout pageTitle="Contact Information">
      <Container maxWidth="lg">
        <Box p={4} my={10}>
          <Box display="flex" color="common.white" flexWrap="wrap" justifyContent="space-around">
            <Box minWidth={300} p={2}>
              <Box
                textAlign="center"
                bgcolor="common.white"
                color="common.black"
                p={3}
                borderRadius="borderRadius">
                <h1>Anna Amick</h1>
                <hr />
                <h3>Front-end Web Developer based in Indianapolis, Indiana</h3>

                <Box display="flex" p={1} justifyContent="space-around" flexWrap="wrap">
                  <ContactBlurb startIcon={<EmailIcon />} text="Email">
                    anna.amick@gmail.com
                  </ContactBlurb>

                  <ContactBlurb startIcon={<CallIcon />} text="Phone">
                    812-560-1959
                  </ContactBlurb>

                  <ContactBlurb startIcon={<LinkedInIcon />} text="LinkedIn">
                    <Link href="https://www.linkedin.com/in/anna-amick/">
                      linkedin.com/in/anna-amick
                    </Link>
                  </ContactBlurb>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box minWidth={200}>
                <img
                  src="/photos/face-pic.jpg"
                  border={8}
                  className={classes.facepic}
                  alt="foreground"
                  style={{ width: '100%' }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
