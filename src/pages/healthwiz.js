import React, { useEffect, useState } from 'react'
import projDetailed2 from '../../static/DetailedImg/projDetailed2.jpg'
import Project from '../containers/project/project'
import contentUrlMap from '../constants/contentUrlMap'

const Healthwiz = ({location}) => {
    const [id, setId] = useState("2")
    const [contentUrl, setContentUrl] = useState(contentUrlMap)
    useEffect(() => {
      if (location.state) {
        setId(location.state.id)
        setContentUrl(location.state.contentUrl)
      }
    })
    return <Project projDetailed={projDetailed2} id={id}
                    contentUrl={contentUrl}
            />
}

export default Healthwiz
