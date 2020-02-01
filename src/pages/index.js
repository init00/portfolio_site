import React, { Component } from "react"
import '../styles/site_style.css'
import Navbar from '../components/UI/navigation/navbar/navbar'
import Banner from '../components/UI/banner/banner'
import Cards from '../components/UI/cards/cards'
import proj1 from '../../static/CoverImg/proj1.jpg'
import proj2 from  '../../static/CoverImg/proj2.jpg'
import proj3 from  '../../static/CoverImg/proj3.jpg'
import proj4 from  '../../static/CoverImg/proj4.jpg'

class App extends Component {

  constructor() {
      super()
      this.state = {
        projectCoverUrlMap: {
          "1": { content: proj1, url: "/bikeratti" },
          "2": { content: proj2, url: "/healthwiz" },
          "3": { content: proj3, url: "/research_on_dalkhai_dance_culture" },
          "4": { content: proj4, url: "/udaan_flight_booking_application" }
        },
        showBanner: true,
        imageLoading: true
      }
    }

  componentDidMount() {
      this.prev = window.scrollY
      window.addEventListener('scroll', this.detectScrollDirection.bind(this), true)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.detectScrollDirection.bind(this))
  }

  detectScrollDirection(event) {
      event.preventDefault()
      const window = event.currentTarget;
      if (this.prev - window.scrollY > 0) {
          console.log("scrolling up");
          this.setState({showBanner: true})
      }
      if (this.prev - window.scrollY < 0) {
          console.log("scrolling down")
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
      <div class="app-enclosure" onScroll={this.bannerClickHandler}>
        <Navbar activePage="Work" />
        {banner}
        {projDisplay}
      </div>
    )}

}

export default App
