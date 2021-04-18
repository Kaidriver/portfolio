import React from "react";
import resume from "./resume.png";
import pdf from "./Kaiwen_Song_Resume.pdf"
const Resume = props => (
  <div className = "resume">
    <img src = {resume}/>
    <a href = {pdf} target = "_blank"><h5>My Resume</h5></a>
  </div>
)

export default Resume;
