import React from 'react'
import Card from '../UI/card/card'

const Footer = (props) => {
    let otherProjs = []
    let contentUrlMap = props.contentUrl
    for (let key in contentUrlMap)
    {
        if (key !== props.curId) {
            otherProjs.push(<Card cardSize="small"
                                  id={key}
                                  key={key}
                                  contentUrl= {{...contentUrlMap}} />)
        }
    }
    return (<div class="projects-footer">
            <p class="project-footer-text">
                <strong>You may also like:<br/></strong>
            </p>
            <div class="footer-card-deck card-deck container">
                {otherProjs}
            </div>
        </div>)
}

export default Footer