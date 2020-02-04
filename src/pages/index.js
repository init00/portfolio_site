import React, { Component } from "react"
import Navbar from '../components/UI/navigation/navbar/navbar'
import Banner from '../components/UI/banner/banner'
import Cards from '../components/UI/cards/cards'
import contentUrlMap from '../constants/contentUrlMap'

class App extends Component {

  constructor() {
      super()
      this.state = {
        projectCoverUrlMap: contentUrlMap,
        showBanner: true,
        imageLoading: true
      }
    }

  componentDidMount() {
      this.prev = window.scrollY
      window.addEventListener('scroll', this.detectScrollDirection.bind(this), true)
  }

  detectScrollDirection(event) {
      event.preventDefault()
      const window = event.currentTarget;
      if(!this.state.showBanner) {
        window.removeEventListener('scroll', this.detectScrollDirection.bind(this), true)
        return;
      }
      if (this.prev - window.scrollY > 0) {
          this.setState({showBanner: true})
      }
      if (this.prev - window.scrollY < 0) {
          this.setState({showBanner: false})
      }
      this.prev = window.scrollY
  }

  bannerClickHandler = (event) => {
      event.preventDefault()
      this.setState({showBanner: false})
  }

  imageLoadHandler = (event) => {
    this.setState({imageLoading: false})
  }

  render() {
      let banner = <Banner showBanner={this.state.showBanner}
                    bannerHandler={this.bannerClickHandler}  />
      let projDisplay = <Cards contentUrl={this.state.projectCoverUrlMap}
                               showBanner={this.state.showBanner} />
      return (
      <div className="app-enclosure" onScroll={this.bannerClickHandler}>
        <Navbar activePage="Work" />
        {banner}
        {projDisplay}
      </div>
    )}

}

export default App
