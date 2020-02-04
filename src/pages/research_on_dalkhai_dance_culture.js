import React, { useEffect, useState } from 'react'
import projDetailed3 from '../../static/DetailedImg/projDetailed3.jpg'
import Project from '../containers/project/project'
import contentUrlMap from '../constants/contentUrlMap'

const ResearchProj = ({location}) => {
    const [id, setId] = useState("3")
    const [contentUrl, setContentUrl] = useState(contentUrlMap)
    useEffect(() => {
      if (location.state) {
        setId(location.state.id)
        setContentUrl(location.state.contentUrl)
      }
    })
    return <Project projDetailed={projDetailed3} researchProject="true" id={id}
                    contentUrl={contentUrl}
            />
}

export default ResearchProj