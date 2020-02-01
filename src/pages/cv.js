import React from 'react'
import Navbar from '../components/UI/navigation/navbar/navbar'
import Frame from '../containers/frame/frame'
import myCV from '../../static/DetailedImg/cv_abhilasha.jpg'

const Cv = () => {
  return (
    <div>
        <Navbar activePage="CV"/>
        <div class="cv-section">
          <div class="container">
            <Frame content={myCV} />
          </div>
        </div>
    </div>
    )
}

export default Cv;