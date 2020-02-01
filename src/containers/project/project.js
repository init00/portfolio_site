import React, { Component } from 'react'
import Navbar from '../../components/UI/navigation/navbar/navbar'
import Footer from '../../components/UI/footer'
import Spinner from '../../components/UI/spinner/spinner'

class Project extends Component {

    constructor(props) {
        super(props)
        this.state = {loading: true}
    }

    imageHandler = (event) => {
       event.preventDefault()
       this.setState({loading: false})
    }

   render () {
        let loadImage = null
        let researchBtn = null
        let scrollButton = null
        if (this.state.loading) {
            loadImage = <Spinner styleClass="frame-spinner"/>
        } else {
            scrollButton = <span class="dot dot-project las la-arrow-up" role="button"
                            onClick={() => window.scrollTo(0, 0)} />
        }
        if (this.props.researchProject) {
            researchBtn = (<a className="research-link"
                              href="https://issuu.com/anthroresearch/docs/craft_documentation-sambalpuri_folk_dance"
                              target="_blank" role="button">View research document</a>)
        }
        return (
            <div>
                <Navbar/>
                <div class="project">
                    <div class="container">
                        {scrollButton}
                        {loadImage}
                        <img onLoad={this.imageHandler} src={this.props.projDetailed}
                             class="img-fluid" alt="" />
                    </div>
                    <div className="rbtn-wrapper">
                        {researchBtn}
                    </div>
                    <Footer curId={this.props.location.state.id}
                            contentUrl={this.props.location.state.contentUrl} />
                </div>
            </div>)
        }
}

export default Project