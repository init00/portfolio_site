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

   render (props) {
        let loadImage = null
        let researchBtn = null
        let scrollButton = null
        if (this.state.loading) {
            loadImage = <Spinner styleClass="frame-spinner"/>
        } else {
            if (this.props.researchProject) {
                researchBtn = (<a className="research-link"
                                  href="https://issuu.com/anthroresearch/docs/craft_documentation-sambalpuri_folk_dance"
                                  target="_blank">View research document</a>)
            }
            scrollButton = <span className="dot las la-arrow-up"
                            onClick={() => window.scrollTo(0, 0)} />
        }

        return (
            <div>
                <Navbar/>
                <div className="project">
                    <div className="project-container">
                        {scrollButton}
                        {loadImage}
                        <img onLoad={this.imageHandler} src={this.props.projDetailed}
                             className="img-fluid" alt="" />
                    </div>
                    <div className="rbtn-wrapper">
                        {researchBtn}
                    </div>
                    <Footer curId={this.props.id}
                            contentUrl={this.props.contentUrl} />
                </div>
            </div>)
        }
}

export default Project