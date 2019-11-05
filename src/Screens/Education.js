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
    backgroundColor: theme.palette.background.default
  },
  media: {
    height: 450
  }
}))

export default function SkillsSummary() {
  const classes = useStyles()

  return (
    <Layout pageTitle="Education">
      <Box display="flex" justifyContent="space-around" mx={2}>
        <Box maxWidth="500px" my={3} mx={2} boxShadow={9} border={10} borderColor="common.white">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                width="100%"
                className={classes.media}
                image="/photos/MeAnd3Dogs.jpg"
                title="bridge"
              />
              <Box height="auto" textAlign="center" justifyContent="center" border={4} m={2}>
                <CardContent>
                  <Typography variant="h6">Education</Typography>
                  <hr />
                  Lourdes University Sylvania, OH August 2013
                  <hr />
                  Bachelor of Arts in Interdisciplinary Studies with a concentration in Allied
                  Health
                  <hr />
                  Consistently maintained a GPA of 3.85/4 or higher
                  <hr />
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Layout>
  )
}
