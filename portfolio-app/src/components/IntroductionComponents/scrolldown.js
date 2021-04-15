import React from "react";
import scroll from "./scroll.png";
import scrollblue from "./scrollblue.png";
import {Link} from "react-scroll";

const ScrollDown = props => {

  let imgsrc = props.id == "section2scroll" ? scrollblue : scroll;
  return (<div className = "scroll" id = {props.id}>
    <Link
      activeClass="active"
      to={props.location}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <h5>{props.text}</h5>
      <img src = {imgsrc}/>
    </Link>
  </div>);
}

export default ScrollDown;
