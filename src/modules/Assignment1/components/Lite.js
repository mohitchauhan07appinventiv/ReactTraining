import React from "react";
import Button from './StartButton';
class Lite extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:this.props.bgColor, color:this.props.color}}className={"cardContainer"}>
        <div className={"Heading"}>
          <h2>{this.props.headingText}</h2>
          <div className="pricingSection">
            <h3>{this.props.price}</h3>
            <p>{this.props.limit}</p>
          </div>
        </div>
        <div className="hl" style={{color:this.props.color}}></div>
        <h3 className={"cardTitle"}>{this.props.title}</h3>
        <ul>
            <li style={{margin:this.props.limarg}}><div><div className='innertick'></div></div>{this.props.list[0]}</li>
            <li style={{margin:this.props.limarg}}><div><div className='innertick'></div></div>{this.props.list[1]}</li>
            <li style={{margin:this.props.limarg}}><div><div className='innertick'></div></div>{this.props.list[2]}</li>
            <li style={{margin:this.props.limarg}}><div><div className='innertick'></div></div>{this.props.list[3]}</li>
        </ul>
        <a href="https://www.google.com" className="bottomText" style={{color:this.props.color, margin:this.props.bottomMarg}}>View all the features</a>
        <Button color={this.props.btncolor} bgColor={this.props.color} />
      </div>
    );
  }
}
export default Lite;
