import React from 'react'
import Card from '../UI/card/card'

const Footer = (props) => {
    let otherProjs = []
    let contentUrlMap = props.contentUrl
    console.log("From footer: contentUrlMap ", contentUrlMap)
    for (let key in contentUrlMap)
    {
        console.log("from inside Footer key and curId:  ", key, props.curId, contentUrlMap[key])
        if (key !== props.curId) {
            otherProjs.push(<Card cardSize="small"
                                  id={key}
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