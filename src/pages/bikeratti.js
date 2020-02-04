import React, { useEffect, useState } from 'react'
import projDetailed1 from '../../static/DetailedImg/projDetailed1.jpg'
import Project from '../containers/project/project'
import contentUrlMap from '../constants/contentUrlMap'

const Bikeratti = ({location}) => {
    const [id, setId] = useState("1")
    const [contentUrl, setContentUrl] = useState(contentUrlMap)
    useEffect(() => {
      if (location.state) {
        setId(location.state.id)
        setContentUrl(location.state.contentUrl)
      }
    })
    return <Project projDetailed={projDetailed1} id={id}
                    contentUrl={contentUrl}
            />
}

export default Bikeratti