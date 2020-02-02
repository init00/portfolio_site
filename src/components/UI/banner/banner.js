import React, {useEffect} from 'react'

const Banner = (props) => {
    let classArray = ['jumbotron']

    useEffect( () => {
        let cardsElement = document.getElementsByClassName('banner-enclosure')[0]
        if (cardsElement != null)
        {
            if (!props.showBanner) {
                if (!cardsElement.classList.contains("hideBanner")) {
                    cardsElement.classList.remove("hideBanner")
                    void cardsElement.offsetWidth;
                    cardsElement.classList.add("hideBanner")
                    cardsElement.style.animationPlayState = "running"
                }
            }
        }
    })

    return (
    <div className="banner-enclosure">
        <div className={classArray.join(" ")} align="center">
            <h1 className="site-heading">Design</h1>
            <br/>
            <h2 className="site-sub-heading">
                <div className="row">
                    <div className="col-2"/>
                    <div className="col-8">
                        <p><i>is a two-way bridge connecting user needs and solutions built on the foundation of empathy</i></p>
                    </div>
                    <div className="col-2" />
                    <div className="col-6" />
                    <button className="down-arrow" onClick={props.bannerHandler}>
                        &#8744;
                    </button>
                </div>
            </h2>
        </div>
    </div>)
}


export default Banner