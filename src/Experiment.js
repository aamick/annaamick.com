import React from 'react'

import MuiBox from '@material-ui/core/Box'

const Box = ({ children, ...props }) => {
  return (
    <MuiBox border={4} p={2} m={2} {...props}>
      {children}
    </MuiBox>
  )
}

export default function Experiment() {
  return (
    <>
      <MuiBox border={1}>hey</MuiBox>
      <Box display="block" justifyContent="space-around" textAlign="center">
        Some text
        <Box>thing one</Box>
        <Box>thing two</Box>
        <Box>thing three</Box>
      </Box>
    </>
  )
}
