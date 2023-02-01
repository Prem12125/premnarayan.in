import React from 'react'
import { Link } from 'react-scroll'
export default function Head() {
  return (
    <div>
      <div id="lead">
        <div id="lead-content">
            <h1>Prem Narayan</h1>
            <h2>Software Engineer</h2>
            <a href="download\Resume_Prem_Narayan.pdf" className="btn-rounded-white">Download Resume</a>
        </div>
        

        <div id="lead-overlay"></div>

        <div id="lead-down">
            <span >
                <Link  to="buttom" spy={true} smooth={true} offset={50} duration={500} > <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
            </span>
        </div>
    
    </div>
    </div>
  )
}
