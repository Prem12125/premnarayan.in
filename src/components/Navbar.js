import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

export default function Navbar(props) {


  return (
<>


    <div id="to-upper">
        <div id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
    <header className="">
        <div id="mobile-menu-close">
            <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul  className="shadow">
            <li>
                <Link  to="about" spy={true} smooth={true} offset={-50} duration={500}>{props.About}</Link>
            </li>
            <li>
                <Link  to="experience" spy={true} smooth={true} offset={-50} duration={500}>{props.Experience}</Link>
            </li>
            <li>
                <Link to="education" spy={true} smooth={true} offset={-50} duration={500}>{props.Education}</Link>
            </li>
            <li>
                <Link  to="projects" spy={true} smooth={true} offset={-50} duration={500}>{props.Projects}</Link>
            </li>
            <li>
                <Link  to="skills" spy={true} smooth={true} offset={-50} duration={500}>{props.Skills}</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} >{props.Contact}</Link>
            </li>
        </ul>
    </header>
    
    
   

    </div>
    </>
  )
}
Navbar.propTypes ={
    About:PropTypes.string,
    Experience:PropTypes.string,
    Education:PropTypes.string,
    Projects:PropTypes.string,
    Skills:PropTypes.string,
    Contact:PropTypes.string

}