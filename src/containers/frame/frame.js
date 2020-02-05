import React, { Component } from 'react'
import Spinner from '../../components/UI/spinner/spinner'

class Frame extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true}
    }

    componentDidMount() {
        let img = document.getElementById("frame-pic")
        img.addEventListener('load', this.imageHandler.bind(this), true)
        img.src=this.props.content
    }

    imageHandler = (event) => {
       event.preventDefault()
       this.setState(prevState => ({loading: !prevState.loading}))
    }

    render(props) {
        let loadImage = null
        let scrollButton = null
        if (this.state.loading) {
           loadImage = <Spinner styleClass="frame-spinner"/>
        } else {
            scrollButton = <span className="dot las la-arrow-up"
                            onClick={() => window.scrollTo(0, 0)} />
        }
        return (
             <div className="wapc-container">
                <div className="wapc-subcontainer">
                    {scrollButton}
                    <img id="frame-pic" src=""
                        className="img-fluid frame-content" alt="" />
                    {loadImage}
                </div>
            </div>
        )
    }
}

export default Frame