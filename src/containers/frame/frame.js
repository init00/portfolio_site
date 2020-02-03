import React, { Component } from 'react'
import Spinner from '../../components/UI/spinner/spinner'

class Frame extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true}
    }

    imageHandler = (event) => {
       event.preventDefault()
       this.setState({loading: false})
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
                    {loadImage}
                    <div>
                        <img src={this.props.content}
                            onLoad={this.imageHandler}
                            className="img-fluid frame-content" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Frame