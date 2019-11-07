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
    height: 400
  }
}))

export default function SkillsSummary() {
  const classes = useStyles()

  return (
    <Layout pageTitle="Skills Summary">
      <Box display="flex" justifyContent="center">
        <Box maxWidth="500px" my={3} mx={2} boxShadow={9} border={10} borderColor="common.white">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                width="100%"
                className={classes.media}
                image="/photos/PhantomIRiver.jpg"
                title="River"
              />
              <Box height="auto" textAlign="center" justifyContent="center" border={4} m={2}>
                <CardContent>
                  <Typography variant="h6">Summary of Skills</Typography>
                  <hr />
                  Solid knowledge of programming concepts with a focus on HTML, CSS, Javascript, and
                  especially React
                  <hr />
                  Competent in understanding stakeholder requirements and business needs
                  <hr />
                  Proficient with Github, Git and VS Code
                  <hr />
                  Excellent analytical thinking, decision-making, and problem-solving skills
                  <hr />
                  Self-motivated as well as a team player, having exceptional organizational and
                  strong written/verbal communication skills
                  <hr />
                  Experienced in testing software and finding and documenting defects
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Layout>
  )
}
