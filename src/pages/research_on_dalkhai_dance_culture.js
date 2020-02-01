import React, { useEffect, useState } from 'react'
import projDetailed3 from '../../static/DetailedImg/projDetailed3.jpg'
import Project from '../containers/project/project'

const ResearchProj = ({location}) => {
    const [id, setId] = useState(0)
    const [contentUrl, setContentUrl] = useState({})
    useEffect(() => {
        if (typeof window === 'undefined') {
            console.log("warn: location prop is not available.")
            return;
          }
        setId(location.state.id)
        setContentUrl(location.state.contentUrl)
        }
    )
    console.log("Location value Bikeratti", {location})
    return <Project projDetailed={projDetailed3} researchProject="true" id={id}
                    contentUrl={contentUrl}
            />
}

export default ResearchProj