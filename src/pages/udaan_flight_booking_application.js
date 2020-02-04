import React, { useEffect, useState } from 'react'
import projDetailed4 from '../../static/DetailedImg/projDetailed4.jpg'
import Project from '../containers/project/project'
import contentUrlMap from '../constants/contentUrlMap'

const Udaan = ({location}) => {
    const [id, setId] = useState("4")
    const [contentUrl, setContentUrl] = useState(contentUrlMap)
    useEffect(() => {
      if (location.state) {
        setId(location.state.id)
        setContentUrl(location.state.contentUrl)
      }
    })
    return <Project projDetailed={projDetailed4} id={id}
                    contentUrl={contentUrl}
            />
}

export default Udaan