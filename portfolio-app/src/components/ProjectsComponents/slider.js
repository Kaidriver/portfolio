import React from "react";
import scroll from "../IntroductionComponents/scroll.png";
export default class Slider extends React.Component{

    constructor(props) {
      super(props);

      this.state = {
        index: 0
      }

      this.decrement = this.decrement.bind(this);
      this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState((state, props) => ({
        index: (state.index + 1) % props.img.length
      }));
    }

    decrement() {
      this.setState((state, props) => ({
        index: state.index == 0 ? props.img.length - 1 : state.index - 1
      }));
    }

    render() {
        console.log(this.props.descriptions)
      return (
        <div className = "slider">
          <h3>{this.props.header}</h3>
          <div className = "sliderBox">
            <img class = "selector" onClick = {this.decrement} src = {scroll}/>
            <a href = {this.props.links[this.state.index]} target = "_blank"><img src = {this.props.img[this.state.index]}/></a>
            <img class = "selector" onClick = {this.increment} src = {scroll}/>
          </div>
          <h5>{this.props.descriptions[this.state.index]}</h5>
        </div>
      )
    }
}
