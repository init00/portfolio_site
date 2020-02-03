import React from 'react'
import Navbar from '../components/UI/navigation/navbar/navbar'
import Frame from '../containers/frame/frame'
import myProcess from '../../static/DetailedImg/process.jpg'


const process = () => (
    <div>
        <Navbar activePage="Process"/>
        <div className="wapc-section">
            <Frame content={myProcess} />
        </div>
    </div>
    )

export default process