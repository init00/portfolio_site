import React, { useEffect, useState } from 'react'
import projDetailed4 from '../../static/DetailedImg/projDetailed4.jpg'
import Project from '../containers/project/project'

const Udaan = ({location}) => {
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
    return <Project projDetailed={projDetailed4} id={id}
                    contentUrl={contentUrl}
            />
}

export default Udaan