import React, { useEffect } from 'react'
import Card from '../card/card'

const Cards = (props) => {
    let classArray = ["projects"]
    let projDisplay = []
    for (let proj in props.contentUrl) {
        projDisplay.push(<Card showBanner={props.showBanner} id={proj} cardSize="big"
                               contentUrl={{...props.contentUrl}} />)
    }

    return (
        <div class={classArray.join(" ")}>
                <div class="card-deck">
                    {projDisplay[0]}
                    {projDisplay[1]}
                </div>
                <div class="card-deck">
                    {projDisplay[2]}
                    {projDisplay[3]}
                </div>
        </div>
    )
}

export default Cards