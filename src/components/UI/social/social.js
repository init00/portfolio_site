import React from 'react'

const Social = (props) => {
    let href = null
    let target = "_blank"
    switch(props.btnType) {
        case "linkedin":
            href = "https://www.linkedin.com/in/tripathiabhilasha1013/"
            break;
        case "instagram":
            href = "https://www.instagram.com/tripathiabhilasha13/?hl=en"
            break;
        default:
            href = "mailto:abhilasha.uxdes@gmail.com"
            target = null

    }

    return (<li className="nav-item">
            <a className="nav-link fa-stack" href={href} target={target}>
                <i className="social-icon fa fa-circle fa-stack-2x icon-bg-1"></i>
                <i className={"fa fa-stack-1x fa-inverse icon-bg-2 fa-" + props.btnType} aria-hidden="true"></i>
            </a>
            </li>)
}

export default Social