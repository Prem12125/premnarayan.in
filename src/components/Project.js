import React from 'react'
import {  Button, CardImg, CardTitle,CardBody } from 'reactstrap';

export default function Project(props) {
  return (
    <div className="container_project h2">

<div id="projects" >
        <h2 className="heading">Projects</h2>
        <div className="container  " >
            <div className="row">                
        <CardImg top width="100%" height="400px" src="images/project.png" alt="Project screenshot" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
         
          <Button href={props.githubLink}>GitHub</Button>
        </CardBody>
    
    
 

            </div>
        </div>
        <div className="container  " >
            <div className="row">                
        <CardImg top width="100%" height="400px" src="images/patch.png" alt="Project screenshot" />
        <CardBody>
          <CardTitle>{props.name1}</CardTitle>
          
          <Button href={"download/Report_project(Prem Narayan ).pdf"}>Download</Button>
        </CardBody>
    
    
 

            </div>
        </div>
    </div>
      
      

    </div>
  )
}
