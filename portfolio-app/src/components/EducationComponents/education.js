import React from "react";
import EducationHeader from "./educationheader.js";
import Institution from "./institution.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Education extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "EducationSection" id = "section3">
        <Container>
          <Row>
            <Col md = {6}>
              <EducationHeader text = "Education"/>
              <Institution school = "UMD" hover = "GPA: N/A" subhead1 = "University of Maryland" subhead2 = "CS Major + ACES Honors (2021-2025)"/>
              <Institution school = "Wootton" hover = "GPA: 4.0" subhead1 = "Thomas S. Wootton High School" subhead2 = "AOIT Program (2017-2021)"/>
            </Col>
            <Col md = {6}>
              <EducationHeader text = "Technical Skills"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
