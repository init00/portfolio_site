import React from 'react'
import NavItem from '../navitems/navitem'
import Social from '../../social/social'

const Navbar = (props) => {
    return (
        <div className="site-navbar">
            <nav className="navbar nav-enclosure fixed-top navbar-expand-sm bg-white">
                <div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar2">
                        <ul className="navbar-nav">
                            <NavItem title="Work" activePage={props.activePage} />
                            <NavItem title="Process" activePage={props.activePage} />
                            <NavItem title="About" activePage={props.activePage}/>
                            <NavItem title="CV" activePage={props.activePage}/>
                        </ul>
                    </div>
                </div>
                <div>
                    <a className="navbar-brand" href="/">Abhilasha Tripathi</a>
                </div>
                <div>
                <div className="social-enclosure">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <i className="las la-bars" onClick={event => event.preventDefault()}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar2">
                        <ul className="navbar-nav">
                            <Social btnType="linkedin" />
                            <Social btnType="instagram" />
                            <Social btnType="envelope" />
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
            <div className="collapse navbar-collapse showHideModal" id="collapsibleNavbar">
                <div className="collapsible-cross">

                </div>
                <div className="collapsible-wpac">
                    <ul className="navbar-nav">
                        <NavItem title="Work" activePage={props.activePage} />
                        <NavItem title="Process" activePage={props.activePage} />
                        <NavItem title="About" activePage={props.activePage}/>
                        <NavItem title="CV" activePage={props.activePage}/>
                    </ul>
                </div>
                <div className="collapsible-footer">
                    <hr/>
                    <div>
                        <ul className="navbar-nav collapsible-social">
                            <Social btnType="linkedin" />
                            <Social btnType="instagram" />
                            <Social btnType="envelope" />
                        </ul>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}


export default Navbar