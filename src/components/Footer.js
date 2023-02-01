import React from 'react'
import { Link } from 'react-scroll'
export default function Footer() {
  return (
    <div>
      
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-5 copyright">
                    <p>
                        Copyright &copy; <span id="current-year">2023</span> Prem Narayan
                    </p>
                </div>
                <div className="col-sm-2 top">
                    <span id="buttom">
                   <Link  to="lead-overlay" spy={true} smooth={true} offset={-100} duration={500} > <i className="fa fa-chevron-up" aria-hidden="true"></i></Link>

                       
                    </span>
                </div>
                <div className="col-sm-5 social">
                    <ul>
                        <li>
                        <a href="https://github.com/Prem12125"><i className="fa fa-github" aria-hidden="true"></i> </a>
                        </li>
                     
                        <li>
                            <a href="https://www.linkedin.com/in/prem-narayan/" ><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                        </li>
                      
                        <li>
                            <a href="https://twitter.com/BeResponsible12" ><span className="fa fa-twitter" aria-hidden="true"></span> </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    </div>
  )
}
