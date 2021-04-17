import React from "react";

const ListRow = props => {

  return (
    <div class = "listrow">
      <div class = "listblock">
        {props.grade}
      </div>
      {props.img.map(item => {
        return <img className = "listitem" src = {item}/>
      })}
    </div>
  )
}

export default ListRow;
