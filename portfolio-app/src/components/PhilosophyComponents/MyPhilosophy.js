import React from "react";
import Container from 'react-bootstrap/Container';
import PhilHeader from "./philheader.js";
import TreeNode from "./treenode.js"
import TextNode from "./textnode.js"
import ScrollDown from "../IntroductionComponents/scrolldown.js"
export default class MyPhilosophy extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "PhilosophySection" id="section2">
        <Container>
          <PhilHeader/>
            <div className = "levelonebox">
              <TreeNode class = "treenode rootnode" target = "leveltwonode" text = "Self-motivation"/>
            </div>
            <TextNode class = "leveltwonode" text = "which stems into..."/>
            <div className = "leveltwobox">
              <TreeNode class = "treenode leveltwonode" target = "levelthreenode1" text = "Perseverance"/>
              <TreeNode class = "treenode leveltwonode" target = "levelthreenode2" text = "Ambition"/>
            </div>
            <TextNode class = "levelthreenode1 levelthreenode2" text = "and leads to..."/>
            <div className = "levelthreebox">
                <TreeNode class = "treenode levelthreenode1" text = "Analytical Thinker"/>
                <TreeNode class = "treenode levelthreenode1" text = "Hard Working"/>
                <TreeNode class = "treenode levelthreenode1" text = "Never Giving Up"/>
                <TreeNode class = "treenode levelthreenode2" text = "Try New Things"/>
                <TreeNode class = "treenode levelthreenode2" text = "Quick Learner"/>
                <TreeNode class = "treenode levelthreenode2" text = "Goal Driven"/>
           </div>
           <ScrollDown text={"Education/Skills"} location={"section3"}/>
        </Container>
      </div>
    )
  }
}
