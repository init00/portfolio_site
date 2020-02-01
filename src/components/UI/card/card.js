import React, {useEffect} from 'react'
import {Link} from 'gatsby'

const Card = (props) => {
    let cardSize = null
    let projId = props.id
    let contentUrlMap = props.contentUrl
    let content = contentUrlMap[projId]['content']
    let redirectUrl = contentUrlMap[projId]['url']
    let link = <Link class="stretched-link"
                        to={redirectUrl}
                        state = { {id: projId, contentUrl: contentUrlMap }}
                        />
    let img = <img src={content} class="card-img-top" alt="Project"></img>

    useEffect( () => {
        let cardsElement = document.getElementsByClassName('project-cards')[projId-1]
        if (cardsElement != null)
        {
            if (!props.showBanner) {
                console.log("Adding pull-up class")
                if (!cardsElement.classList.contains("hideBanner")) {
                    //cardsElement.classList.remove("projects-pull-up")
                    //void cardsElement.offsetWidth;
                    cardsElement.classList.add("projects-pull-up")
                    cardsElement.style.animationPlayState = "running"
                }
            }
            else {
                if (cardsElement.classList.contains("projects-pull-up"))
                   {
                    console.log("Adding animation pause class")
                    cardsElement.style.animationPlayState = "paused"
                    //cardsElement.style.animationDirection = "reverse"
                   }
            }
        }
    })

    if (props.cardSize === "small") {
        cardSize = (
            <div class="small-card-style">
                <div class="card">
                    {img}
                    {link}
                </div>
            </div>
        )
    } else {
        cardSize = (
                <div class="big-card-style">
                    <div class="project-cards card">
                        {img}
                        {link}
                    </div>
                </div>)
    }
    return cardSize
}

export default Card