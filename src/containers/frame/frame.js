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
            scrollButton = <span class="dot dot-frame las la-arrow-up" role="button"
                            onClick={() => window.scrollTo(0, 0)} />
        }
        return (
            <React.Fragment>
                {scrollButton}
                {loadImage}
                <div class="project-frame container">
                    <img id="project-image" src={this.props.content}
                         onLoad={this.imageHandler}
                         class="img-fluid frame-content" alt="" />
                </div>
            </React.Fragment>
        )
    }
}

export default Frame