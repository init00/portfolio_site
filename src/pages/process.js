import React from 'react'
import Navbar from '../components/UI/navigation/navbar/navbar'
import Frame from '../containers/frame/frame'
import myProcess from '../../static/DetailedImg/process.jpg'


const process = () => (
    <div>
        <Navbar activePage="Process"/>
        <div class="process-section">
          <div class="container">
            <Frame content={myProcess} />
          </div>
        </div>
    </div>
    )

export default process