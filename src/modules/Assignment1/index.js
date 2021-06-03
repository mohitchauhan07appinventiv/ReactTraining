import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Card from "./components/CardElement";

class Assignment1 extends React.Component {
  render() {
    const card1 = {
      containerClass: "cardContainer",
      headingText: "Lite",
      price: "Free",
      limit: "with restrictions",
      title: "All of Lite Plus:",
      class: "innertick",
      list: [
        "Manage conversatons directly from your website",
        "Bot without the AI service.",
        "Achieved chat for 30 days.",
        "Free, for always.",
      ],
    };
    const card2 = {
      headingText: "Pro",
      containerClass: "cardContainer pro",
      color: "white",
      price: "29$",
      limit: "monthly",
      title: "All of Lite Plus:",
      class: "innertick pro",
      list: [
        "Bot with AI that can recognize the user's behaviour and can automatize the sentences.",
        "Unlimited conversational flows.",
        "Facebook, Twitter, Instagram and Linkedin integration.",
        "Achieved chat without limits.",
      ],
      proliClass: "liStyle",
      btncolor: "black",
      bottomMarg: "64px 0px 20px 0px",
    };

    return (
      <div className={"mainContainer"}>
        <div className={"innerContainer"}>
          <div className={"saveYourMoneyColumn"}>
            <Banner />
          </div>
          <div className={"liteColumn"}>
            <h1 className={"mainHeading"}>
              {"Start now"}
              <br /> {"your"}{" "}
              <span className={"freePlanText"}>{"Free Plan."}</span>
            </h1>
            <Card card={card1} />
          </div>
          <div className={"proColumn"}>
            <div className={"contactUsContainer"}>
              <p className={"corporateText"}>{"Are you a corporate?"}</p>
              <p className={"cotactUsLink"}>
                <a href="https://www.google.com">{"Contact us"}</a>
              </p>
            </div>
            <Card card={card2} />
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
