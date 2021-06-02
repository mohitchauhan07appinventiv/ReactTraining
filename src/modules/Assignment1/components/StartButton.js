import React from "react";

class StartButton extends React.Component {
  render() {
    return (
      <button className="startButton" style={{color:this.props.color,backgroundColor:this.props.bgColor}}>Start 14 days of free Pro Plan</button>
    );
  }
}
export default StartButton;