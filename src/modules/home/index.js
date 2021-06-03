// structure
//import
//component declaration
// code

import React, { Component } from "react";
import "./index.css";
import ReusableBox from '../../components/reusableBox';

class Home extends Component {
  renderBox(title, buttonTitle){
    return(
      <div className={"itemContainer"}>
          <h3>{title}</h3>
          <button>{buttonTitle}</button>
        </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>
        {this.renderBox("First Container", "Click me First")}
        {this.renderBox("Second Container",'click me second')}
        {this.renderBox('first Container','click me third')}
        <ReusableBox heading={"Fourth Container"} buttonTitle={"Click Me Fourth"} />
        <ReusableBox heading={"Fifth Container"} buttonTitle={"Click Me Fifth"} />
      </div>
    );
  }
}
export default Home;
//export Home
