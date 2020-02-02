import React from 'react'
import NavItem from '../navitems/navitem'
import Social from '../../social/social'

const Navbar = (props) => {
    return (
        <div className="site-navbar">
            <nav className="navbar fixed-top navbar-expand-sm bg-white">
                <ul className="navbar-nav">
                    <NavItem title="Work" activePage={props.activePage} />
                    <NavItem title="Process" activePage={props.activePage} />
                    <NavItem title="About" activePage={props.activePage}/>
                    <NavItem title="CV" activePage={props.activePage}/>
                </ul>
                <spacer style={{flex: 1}} />
                <spacer style={{flex: 1}} />
                <a className="navbar-brand" href="/">Abhilasha Tripathi</a>
                <spacer style={{flex: 1}} />
                <spacer style={{flex: 1}} />
                <spacer style={{flex: 1}} />
                <ul className="navbar-nav justify-content-end">
                    <Social btnType="linkedin" />
                    <Social btnType="instagram" />
                    <Social btnType="envelope" />
                </ul>
            </nav>
        </div>
    )
}


export default Navbar