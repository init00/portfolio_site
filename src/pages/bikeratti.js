import React from 'react'
import projDetailed1 from '../../static/DetailedImg/projDetailed1.jpg'
import Project from '../containers/project/project'

const project = ({location}) => {
    return <Project projDetailed={projDetailed1}
             location={location} />
}

export default project