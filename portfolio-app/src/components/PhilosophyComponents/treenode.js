import React from "react";

const TreeNode = function(props) {

  const changeOpacity = function() {
    let nodes = document.querySelectorAll("." + props.target);
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeName != "H5" || !nodes[i].classList.contains("levelthreenode1")) {
        nodes[i].style.opacity == 1 ? nodes[i].style.opacity = 0 : nodes[i].style.opacity = 1;
      }
    }

    if (props.class.includes("rootnode") && nodes[0].style.opacity == 0) {
      let allNodes = document.querySelectorAll(".treenode");
      for (var i = 3; i < 9; i++) {
        allNodes[i].style.opacity = 0;
      }

      document.querySelectorAll("#philSubHeader")[2].style.opacity = 0;
    }
    else {
      let lvl3nodes = document.querySelectorAll(".levelthreenode1, .levelthreenode2");
      if (!props.class.includes("levelthreenode1") && !props.class.includes("levelthreenode2") && nodes[0].nodeName == "H5" && nodes[0].classList.contains("levelthreenode1")) {
        if (lvl3nodes[1].style.opacity == 0 && lvl3nodes[4].style.opacity == 0) {
          lvl3nodes[0].style.opacity = 0;
        }
        else {
          lvl3nodes[0].style.opacity = 1;
        }
      }
    }
  }

  return <button onClick = {changeOpacity} className = {props.class}>{props.text}</button>;
}



export default TreeNode;
