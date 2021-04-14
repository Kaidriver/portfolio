import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroText from './introtext.js'
import IntroHeading from './introheading.js'
import PersonalImage from './personalimage.js'
import ContactInfo from './contactinfo.js'
import ScrollDown from "./scrolldown.js"
export default class Introduction extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "IntroSection">
        <Container>
          <IntroHeading/>
          <Row>
            <Col md = {6}>
              <IntroText/>
            </Col>
            <Col md = {6}>
              <PersonalImage/>
              <ContactInfo/>
            </Col>
          </Row>
          <ScrollDown text={"My Philosophy"} location={"section2"}/>
        </Container>
      </div>
    );
  }
}
