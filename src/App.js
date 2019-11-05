import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Screens/Home'
import ContactInfo from './Screens/ContactInfo'
import Education from './Screens/Education'
import SkillsSummary from './Screens/SkillsSummary'
import WorkExperience from './Screens/WorkExperience'
import WorkReferences from './Screens/WorkReferences'
import Experiment from './Experiment'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/contact-info" component={ContactInfo} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/skills-summary" component={SkillsSummary} />
        <Route exact path="/work-experience" component={WorkExperience} />
        <Route exact path="/work-references" component={WorkReferences} />
        <Route exact path="/Experiment" component={Experiment} />
      </Switch>
    </Router>
  )
}

export default App
