import React from "react";
import umd from "./umd.gif";
import wootton from "./wootton.png"
const Institution = props => {

  return (
    <div class = "institutionContainer">
      <div class = "institution">
        <img src = {props.school == "UMD" ? umd : wootton}/>
        <h3>{props.hover}</h3>
      </div>

      <h3>{props.subhead1}</h3>
      <h5>{props.subhead2}</h5>
    </div>
  )
}

export default Institution;
