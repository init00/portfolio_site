import React from 'react'
import projDetailed3 from '../../static/DetailedImg/projDetailed3.jpg'
import Project from '../containers/project/project'

const project = ({location}) => {
    return <Project projDetailed={projDetailed3} researchProject="true"
             location={location} />
}

export default project