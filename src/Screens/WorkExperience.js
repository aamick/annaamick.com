import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import MediaCard from '../MediaCard'
import Layout from '../Layout'

export default () => {
  return (
    <Layout pageTitle="Work Experience">
      <Container maxWidth="md">
        <Box pt={1} px={1} display="flex" justifyContent="center" textAlign="center">
          <MediaCard image="/photos/LkMISunset2.jpg" title="Junior Software Developer">
            <hr />
            Home Code Makers, LLC., Indianapolis, IN <br />
            September 2018 - Present <hr />
            *Worked with HTML, CSS, Javascript and React <hr />
            *Helped test educational software designed to teach programming <hr />
            *Paired with a Senior Software Developer on designing and building web applications from
            the ground up using React.
          </MediaCard>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={2} px={1} display="flex" justifyContent="center" textAlign="center">
          <MediaCard image="/photos/PhantomIBridge.jpg" title="Contractor">
            <hr />
            Self-Employed, Punta Gorda, FL <br />
            January 2017 - September 2018 <hr />
            *Completely remodeled a large three story house and sold for profit
            <hr />
            *Personally installed new plumbing, electrical, wood and tile flooring and showers
            <hr />
            *Oversaw hiring and inspected contractors’ work for quality and proper attention to
            detail
          </MediaCard>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={2} px={1} display="flex" justifyContent="center" textAlign="center">
          <MediaCard image="/photos/mythreehorses.jpg" title="Investigator">
            <hr />
            Indiana Department of Insurance, Indianapolis, IN <br />
            December 2013 - January 2017 <hr />
            *Investigated wrongful injury and death cases and wrote reports on the outcome of the
            investigation
            <hr />
            *Worked in tandem with attorneys in helping to bring justice to lay people, physicians,
            and hospitals
            <hr />
            *Taught and provided security for the building, including testifying in court
          </MediaCard>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={3} px={1} display="flex" justifyContent="center" textAlign="center">
          <MediaCard image="/photos/AceandI.jpg" title="State Tested Nursing Assistant(STNA)">
            <hr />
            Ashanti Hospice and Palliative Care, Toledo, OH <br />
            July 2009 - October 2013
            <hr />
            *Performed vital checks and assisted nurses with examinations and procedures
            <hr />
            *Collaborated with colleagues for efficient filing, documenting, and charting
            <hr />
            *Assisted patients with personal hygiene, nourishment, and one-on-one encouragement
          </MediaCard>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={3} px={1} display="flex" justifyContent="center" textAlign="center">
          <MediaCard image="/photos/N8EstherI.jpg" title="Sergeant, Military Police Officer">
            <hr />
            United States Army, Taylor, MI <br />
            June 2006 - June 2012 <hr />
            *Provided security for several missions in Michigan, Honduras, and Afghanistan
            <hr />
            *Operated military vehicles, equipment, and weapons with proficiency
            <hr />
            *Directed several soldiers through many missions and one tour of duty
          </MediaCard>
        </Box>
      </Container>
    </Layout>
  )
}
