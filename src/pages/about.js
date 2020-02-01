import React from "react"
import Navbar from '../components/UI/navigation/navbar/navbar'
import Frame from '../containers/frame/frame'
import myPic from '../../static/DetailedImg/myPic.jpg'
import myStory from '../../static/DetailedImg/about_tree.jpg'

const About = () => {
  
  let imgPic = <img src={myPic} class="card-img-top" alt=""></img>
  let intro = ("I am an extremely passionate individual who believes that learning is the\
                best way to grow. I am not afraid to take risks and try something new. A\
                balance between personal and professional life is important to me.\
                Outside work I enjoy swimming, Illustration, reading and hanging out\
                with my friends.")
  let card1 = (<div class="card">
                {imgPic}
                {/* <div class="about-card">
                    {imgPic}
                </div> */}
              </div>)

  let card2 = (<div class="about-card card">
                <div class="card-body">
                  <p class="about-card card-text">
                    <i>"{intro}"</i>
                  </p>
                </div>
              </div>)

  let contactInfo = (<i>Email- abhilasha.uxdes@gmail.com<br/>
                    Mobile no.- +91-9165915546</i>)

  return (
    <div>
      <Navbar activePage="About"/>
      <div class="about-section">
        <div class="card-deck">
          {card1}
          {card2}
        </div>
          <div class="about-story-pic container">
            <Frame content={myStory} />
          </div>
        <div class="about-footer">
          {contactInfo}
        </div>
      </div>
    </div>
    )
}

export default About;