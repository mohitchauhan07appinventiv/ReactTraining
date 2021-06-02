import React from "react";
import Button from './StartButton';
class Lite extends React.Component {
  render() {
    return (
      <div className={this.props.card.containerClass}>
        <div className={"Heading"}>
          <h2>{this.props.card.headingText}</h2>
          <div className="pricingSection">
            <h3>{this.props.card.price}</h3>
            <p>{this.props.card.limit}</p>
          </div>
        </div>
        <div className="hl" style={{borderColor:this.props.card.color}}></div>
        <h3 className={"cardTitle"}>{this.props.card.title}</h3>
        <ul>
            <li className={this.props.card.proliClass}><div><div className={this.props.card.class}></div></div>{this.props.card.list[1]}</li>
            <li className={this.props.card.proliClass}><div><div className={this.props.card.class}></div></div>{this.props.card.list[2]}</li>
            <li className={this.props.card.proliClass}><div><div className={this.props.card.class}></div></div>{this.props.card.list[0]}</li>
            <li className={this.props.card.proliClass}><div><div className={this.props.card.class}></div></div>{this.props.card.list[3]}</li>
        </ul>
        <a href="https://www.google.com" className="bottomText" style={{color:this.props.card.color, margin:this.props.card.bottomMarg}}>View all the features</a>
        <Button color={this.props.card.btncolor} bgColor={this.props.card.color} />
      </div>
    );
  }
}
export default Lite;
