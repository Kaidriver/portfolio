import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsHeader from "./projectsheader.js"
import Slider from "./slider.js";
import ludicrous from "./ludicrous.png";
import vegetable from "./vegetablegarden.png";
import covid from "./covid.png";
import sodoku from "./sodoku.png";
import musiscan from "./musiscan.jpg";
import vclarinet from "./vclarinet.jpg";
import colorrush from "./colorrush.jpg";

export default class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "ProjectsSection" id = "section4">
        <Container>
          <ProjectsHeader/>
          <Row>
            <Col md = {6}>
              <Slider header = "Websites" img = {[ludicrous, vegetable]} links = {["https://ludicrouscreations.com/", "https://vegetablegarden.co/"]} descriptions = {["Fully-functional e-commerce website for my 3D-printing business, LudicrousCreations", "Business website for popular local vegetarian resturant, Vegetable Garden"]}/>
              <Slider header = "Web Apps" img = {[covid, sodoku]} links = {["https://kaidriver.github.io/COVID-19-Near-Me/", "https://kaidriver.github.io/SodokuSolver/"]} descriptions = {["A voice-controlled COVID-19 tracker that locates and displays statistics for nearby COVID-19 cases", "Sodoku solver that utilizes back-tracking recursive algorithm"]}/>
            </Col>
            <Col md = {6}>
              <Slider header = "Mobile Apps" img = {[musiscan, vclarinet, colorrush]} links = {["https://www.youtube.com/watch?v=k4GGHpDMrzU", "https://github.com/Kaidriver/VClarinet", "https://github.com/Kaidriver/ColorRush"]} descriptions = {["An app that utilizes a machine learning model to detect music notes taken by phone camera (Winner of the 2019 Congressional App Challenge)", "An app that displays clarinet keys to allow users to play the clarinet on their devices (Best App of CodeDay DC Fall 2018)", "A game that challenge users to find different colors in their surroudings (Winner of Best Game CodeDay DC Winter 2019)"]}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
