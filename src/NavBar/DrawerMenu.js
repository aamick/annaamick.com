import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import PeopleIcon from '@material-ui/icons/People'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'

const ListItem = ({ Icon, text, to }) => {
  const location = useLocation()
  const selected = to === location.pathname

  return (
    <MuiListItem button component={RouterLink} to={to} selected={selected}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </MuiListItem>
  )
}

export default ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      <Drawer
        open={drawerOpen}
        anchor="right"
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        variant="temporary">
        <Toolbar />
        <List>
          <ListItem text="Home" Icon={HomeIcon} to="/home" />
          <Divider />
          <ListItem text="Skills Summary" Icon={AssignmentIcon} to="/skills-summary" />
          <ListItem text="Work References" Icon={PeopleIcon} to="/work-references" />
          <Divider />
          <ListItem text="Work Experience" Icon={WorkIcon} to="/work-experience" />
          <ListItem text="Education" Icon={CastForEducationIcon} to="/education" />
          <Divider />
          <ListItem text="Contact Info" Icon={PermContactCalendarIcon} to="/contact-info" />
        </List>
      </Drawer>
    </>
  )
}
