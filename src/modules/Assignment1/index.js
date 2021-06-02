import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Card from "./components/Lite";

class Assignment1 extends React.Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"innerContainer"}>
          <div className={"saveYourMoneyColumn"}>
            <Banner />
          </div>
          <div className={"liteColumn"}>
            <h1 className={"mainHeading"}>
              Start now
              <br /> your <span className={"freePlanText"}>Free Plan.</span>
            </h1>
            <Card
              headingText={"Lite"}
              price={"Free"}
              limit={"with restrictions"}
              title={"Plan includes:"}
              list={[
                "Manage conversatons directly from your website",
                "Bot without the AI service.",
                "Achieved chat for 30 days.",
                "Free, for always.",
              ]}
            />
          </div>
          <div className={"proColumn"}>
            <div className='contactUsContainer'>
                <p className='corporateText'>Are you a corporate?</p>
                <p className='cotactUsLink'><a href='#'>Contact us</a></p>
            </div>
            <Card
              headingText={"Pro"}
              bgColor={"rgb(60,85,172)"}
              color={"white"}
              price={"29$"}
              limit={"monthly"}
              title={"All of Lite Plus:"}
              list={[
                "Bot with AI that can recognize the user's behaviour and can automatize the sentences.",
                "Unlimited conversational flows.",
                "Facebook, Twitter, Instagram and Linkedin integration.",
                "Achieved chat without limits.",
              ]}
              limarg={"0px 0px 22px 0px"}
              btncolor={'black'}
              bottomMarg={'64px 0px 20px 0px'}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
