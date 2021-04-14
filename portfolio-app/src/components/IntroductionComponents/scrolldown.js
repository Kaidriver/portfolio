import React from "react";
import scroll from "./scroll.png";
import {Link} from "react-scroll";

const ScrollDown = props => (
  <div className = "scroll">
    <Link
      activeClass="active"
      to={props.location}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <h5>{props.text}</h5>
      <img src = {scroll}/>
    </Link>
  </div>
)

export default ScrollDown;
