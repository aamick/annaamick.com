import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import Layout from '../Layout'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.secondary.light
  },
  media: {
    height: 400
  }
}))

export default function WorkReferences() {
  const classes = useStyles()

  return (
    <Layout pageTitle="Work References">
      <Box display="flex" justifyContent="center">
        <Box maxWidth="500px" my={3} mx={1} boxShadow={9} border={10} borderColor="common.white">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                width="100%"
                className={classes.media}
                image="/photos/TorchLkRocks.jpg"
                title="River"
              />
              <Box
                height="auto"
                textAlign="center"
                justifyContent="center"
                border={4}
                borderColor="secondary.dark"
                m={1}>
                <CardContent>
                  <Typography variant="h6">Work References</Typography>
                  <hr />
                  Work Refrences From Matthew Barnes and Nathan Amick
                  <br />
                  Home Code Makers, LLC., Indianapolis, IN <hr />
                  "I recently had the opportunity to work with Anna Amick, a Junior Software
                  Developer, as she was helping to build our redeveloped and redesigned website
                  (thepsp.org). She is driven, hardworking, diligent, and competent. I also found
                  her ability to stay on task refreshing. In a world of distractions and other
                  opportunities, it's helpful to work with someone so dedicated to whatever they are
                  working on at that time."
                  <br />
                  ~Matt Barnes, President of Public Servants' Prayer
                  <hr />
                  "I recently had the opportunity to work with Anna Amick, a Junior Software
                  Developer, as she was helping to build our redeveloped and redesigned website
                  (thepsp.org). She is driven, hardworking, diligent, and competent. I also found
                  her ability to stay on task refreshing. In a world of distractions and other
                  opportunities, it's helpful to work with someone so dedicated to whatever they are
                  working on at that time."
                  <br />
                  ~Nathan Amick, Senior Software Engineer
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Layout>
  )
}
