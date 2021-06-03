import React from "react";
import Row from "../../components/row";
import "./index.css";

export default class Assignment2 extends React.Component {
  header() {
    return (
      <div className={"headerContainer"}>
        <img
          className={"headerImage"}
          src="images/Header.png"
          alt="header Banner"
        />
        <div className={"floatingText"}>
          <span className={"specialText"}>9 React Developer Tools</span> to
          create Better Apps Faster
        </div>
      </div>
    );
  }
  footer() {
    return (
      <div className={"footerContainer"}>
        <img
          className={"skype_logo"}
          src={"images/skype.png"}
          alt={"skype logo"}
        />
        <p className={"skypeAddress"}>luminous_bde10</p>
        <div className={"vl"}></div>
        <img
          className={"email_logo"}
          src={"images/email.png"}
          alt={"email logo"}
        />
        <p className={"emailAddress"}>blog@eluminoustechnologies.com</p>
      </div>
    );
  }
  render() {
    return (
      <div className={"mainContainer"}>
        {this.header()}
        <Row
         
          imgsrc="images/1.png"
          title="1) React Developer Tools"
          info="Official Chrome extesion for React from Facebook that lets you examin the list of components and subcomponents on the webpage"
        />
        <Row
          attr="nextRow"
          imgattr='nextRowImageSection'
          imgsrc="images/2.svg"
          title="2) Create React App"
          info="Tool used in the process of setting up a React IDE."
        />
        <Row
         
          imgsrc="images/3.png"
          title="3) Storybook"
          info="Online app that lets you create UI components."
        />
        <Row
          attr="nextRow"
          imgattr='nextRowImageSection'
          imgsrc="images/4.png"
          title="4) React Styleguidist"
          info="It offers an interactive way of creating and sharing UI."
        />
        <Row
          
          imgsrc="images/1.png"
          title="5) Bit"
          info="CLI tool and online platform that enables you to publish React components."
        />
        <Row
          attr="nextRow"
          imgattr='nextRowImageSection'
          imgsrc="images/2.svg"
          title="6) React Bootstrap"
          info="Powerful toolkit that comprises HTML, CSS, and JavaScript tools to help you create webpages and applications"
        />
        <Row
          
          imgsrc="images/3.png"
          title="7) React Sight"
          info="Chrome extension for a visual illustration of all components of your app in a live tree structure."
        />
        <Row
          attr="nextRow"
          imgattr='nextRowImageSection'
          imgattr='nextRowImageSection'
          imgsrc="images/4.png"
          title="8) Why did you render"
          info="It alerts you in the console when an aoidable render occurs."
        />
        <Row
          
          imgsrc="images/2.svg"
          title="9) React Proto"
          info="Lets you drag and drop the components your way to create a UI instead of coding."
        />
        {this.footer()}
      </div>
    );
  }
}
