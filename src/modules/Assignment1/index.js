import React from "react";
import "./index.css";
import Banner from "./components/Banner";

class Assignment1 extends React.Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"innerContainer"}>
          <div className={"saveYourMoneyColumn"}>
            <Banner />
          </div>
          <div className={"liteColumn"}></div>
          <div className={"proColumn"}></div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
