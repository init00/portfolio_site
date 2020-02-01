import React from 'react'
import projDetailed2 from '../../static/DetailedImg/projDetailed2.jpg'
import Project from '../containers/project/project'

const project = ({location}) => {
    return <Project projDetailed={projDetailed2}
             location={location} />
}

export default project
