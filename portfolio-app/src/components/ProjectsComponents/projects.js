import React from "react";
import Container from 'react-bootstrap/Container';
import ProjectsHeader from "./projectsheader.js"
import Slider from "./slider.js";
export default class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "ProjectsSection" id = "section4">
        <Container>
          <ProjectsHeader/>
          <Slider/>
        </Container>
      </div>
    );
  }
}
