import React from "react";
import Button from './StartButton';
class Lite extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:this.props.card1.bgColor, color:this.props.card1.color}}className={"cardContainer"}>
        <div className={"Heading"}>
          <h2>{this.props.card1.headingText}</h2>
          <div className="pricingSection">
            <h3>{this.props.card1.price}</h3>
            <p>{this.props.card1.limit}</p>
          </div>
        </div>
        <div className="hl" style={{borderColor:this.props.card1.color}}></div>
        <h3 className={"cardTitle"}>{this.props.card1.title}</h3>
        <ul>
            <li style={{margin:this.props.card1.limarg}}><div><div className={this.props.card1.class}></div></div>{this.props.card1.list[1]}</li>
            <li style={{margin:this.props.card1.limarg}}><div><div className={this.props.card1.class}></div></div>{this.props.card1.list[2]}</li>
            <li style={{margin:this.props.card1.limarg}}><div><div className={this.props.card1.class}></div></div>{this.props.card1.list[0]}</li>
            <li style={{margin:this.props.card1.limarg}}><div><div className={this.props.card1.class}></div></div>{this.props.card1.list[3]}</li>
        </ul>
        <a href="https://www.google.com" className="bottomText" style={{color:this.props.card1.color, margin:this.props.card1.bottomMarg}}>View all the features</a>
        <Button color={this.props.card1.btncolor} bgColor={this.props.card1.color} />
      </div>
    );
  }
}
export default Lite;
