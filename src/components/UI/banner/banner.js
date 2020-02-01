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
    <div class="banner-enclosure">
        <div class={classArray.join(" ")} align="center">
            <h1 class="site-heading">Design</h1>
            <br/>
            <h2 class="site-sub-heading">
                <div class="row">
                    <div class="col-2"/>
                    <div class="col-8">
                        <p><i>is a two-way bridge connecting user needs and solutions built on the foundation of empathy</i></p>
                    </div>
                    <div class="col-2" />
                    <div class="col-6" />
                    <button class="down-arrow" onClick={props.bannerHandler}>
                        &#8744;
                    </button>
                </div>
            </h2>
        </div>
    </div>)
}


export default Banner