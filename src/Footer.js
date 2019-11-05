import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

export default () => {
  return (
    <Box p={2} pt={4} bgcolor="common.black">
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center">
          <Box color="common.white" p={3}>
            © 2019 Anna Amick.
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
