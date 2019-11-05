import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    backgroundColor: theme.palette.primary.dark
  },
  media: {
    height: 350
  }
}))

export default function MediaCard({ image, title, children }) {
  const classes = useStyles()

  return (
    <Box
      height="auto"
      my={3}
      boxShadow={9}
      border={8}
      borderColor="text.primary"
      borderRadius="borderRadius">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="photo"></CardMedia>
          <Box height="auto" border={4} borderColor="primary.light" m={2}>
            <CardContent backgroundcolor="secondary">
              <Typography variant="h6">
                <Box fontWeight="fontWeightBold">{title}</Box>
              </Typography>
              {children}
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  )
}
