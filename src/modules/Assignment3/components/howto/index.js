import React from "react";
import "./index.css";
import FeatureBox from "../../components/featureBox";
import Button from "../../components/button";

export default function HowTo(props) {
  return (
    <div className="howToContainer">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className={"threeFeatures"}>
        <FeatureBox
          src={props.imageSrc[0]}
          data={{
            title: "Get verified quickly",
            text: "Just sign up, upload your verification documents and open your account.",
            step: "1",
            oval:props.ovalType,
          }}
        />
        <FeatureBox src={props.imageSrc[1]}
          data={{
            title: "Buy Dogecoin",
            text: "Select which coins you would like to buy and how much you want to purchase.",
            step: "2",
            oval:props.ovalType,
          }} />
        <FeatureBox 
        src={props.imageSrc[2]}
        data={{
          title: "Receive coins",
          text: "We will send your coins to your wallet within 15 minutes of payment approval.",
          step: "3",
          oval:props.ovalType,
        }}/>
      </div>
      <div className="featuresButton">
      <Button class={props.button.class} text={props.button.text} />
      </div>
    </div>
  );
}
