import React, { Component } from 'react'
import Navbar from '../../components/UI/navigation/navbar/navbar'
import Footer from '../../components/UI/footer'
import Spinner from '../../components/UI/spinner/spinner'

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true}
    }

    componentDidMount() {
        let img = document.getElementById("project-pic")
        img.addEventListener('load', this.imageHandler.bind(this), true)
        img.src=this.props.projDetailed
    }


    imageHandler = (event) => {
       event.preventDefault()
       this.setState(prevState => ({loading: !prevState.loading}))
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
                        <img id="project-pic" src=""
                            className="img-fluid" alt="" />
                        {loadImage}
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