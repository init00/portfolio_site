import React from 'react'

const checkActive = (title, activePage) => {
    if (title === activePage) {
        return true
    }
    return false
}

const Navitem = (props) => {
    let redirectPage = null
    switch(props.title) {
        case "Work":
            redirectPage = "/"
            break;
        case "Process":
            redirectPage = "/process"
            break;
        case "About":
            redirectPage = "/about"
            break;
        case "CV":
            redirectPage = "/cv"
            break;
        default:
    }
    let active = checkActive(props.title, props.activePage) ? "active": ""
    let classes = "nav-link " + active
    return (
        <li className="nav-item">
            <a className={classes} href={redirectPage}>{props.title}</a>
        </li>
    )
}

export default Navitem