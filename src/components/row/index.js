import React from "react";
export default class Row extends React.Component {
  render() {
    return (
      <div id={this.props.attr} className={"rowContainer"}>
        <div id={this.props.imgattr} className={"imageSection"}>
          <img className={"rowIcon"} src={this.props.imgsrc} alt={"logo"} />
        </div>
        <div className={"contentSection"}>
          <h2>{this.props.title}</h2>
          <p>{this.props.info}</p>
        </div>
      </div>
    );
  }
}
