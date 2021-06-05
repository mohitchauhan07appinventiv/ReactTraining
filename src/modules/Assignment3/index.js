import React from "react";
import "./index.css";
import Header from "./components/header";
import Banner from "./components/banner";
import images from "./utils/LoadImages";
import Card from './components/card';
import Card2 from './components/card2';
import HowTo from './components/howto';
import FeatureBox from './components/featureBox';
import Button from './components/button';
function Xcoin() {
  return (
    <div className={"mainWrapper"}>
      <Header />
      <Banner
        data={{
          title: "Buy & Sell Dogecoin Online",
          subtitle: "Add Doge to your crypto wallet",
          text1: "Instant, fun, and free from the traditional banking system.",
          text2: "Buy Dogecoin with your debit or credit card today.",
          title2: "Get Your crypto now!"
        }}
      />
      <div className={'cardSection'}>
        <Card src={images.master} dots={'&bull&bull;&bull;&bull;'} cardHolder={'George Dux'} exp={'09/15/2023'} bgcolor={'pink'}/>
        <Card src={images.visa} dots={'&bull&bull;&bull;&bull;'} cardHolder={'John Connor'} exp={'09/15/2023'} bgcolor={'blue'}/>
        <Card2 title={'Exchange your Dogecoin Instantly!'} text={'Buy & sell your Doge using your Visa or Mastercard debit or credit card.'}/>
      </div>
      <div className={'featuresSection'}>
        <HowTo title={'How to Buy Dogecoin'} text={'Only 3 simple steps'}/>
        <div className={'cardSection'}>
          <FeatureBox src={images.checkBlue} title={'Get verified quickly'} text={'Just sign up, upload your verification document and open your account.'} number={'1'}/>
          <FeatureBox src={images.buyDogeBlue} title={'Get verified quickly'} text={'Just sign up, upload your verification document and open your account.'} number={'2'}/>
          <FeatureBox src={images.receive15MinBlue} title={'Get verified quickly'} text={'Just sign up, upload your verification document and open your account.'} number={'3'}/>
          <Button class={'Btn blue'} text={'BUY DOGECOIN'} />
        </div>
      </div>
      <div className={'featuresSection'}>
        <HowTo title={'How to Sell Dogecoin'} text={'Only 3 simple steps'}/>
        <div className={'cardSection'}>
          <FeatureBox class={''} src={images.checkGreen} title={'Get verified quickly'} text={'Just sign up, upload your verification document and open your account.'} number={'1'}/>
          <FeatureBox class={''} src={images.buyDogeGreen} title={'Sell Dogecoin'} text={'Select Dogecoin under the "sell" tab and decide how much you want to sell'} number={'2'}/>
          <FeatureBox class={''} src={images.receive15MinGreen} title={'Receive Cash'} text={'We will send you coins to your wallet within 15 minutes of payment approval.'} number={'3'}/>
          <Button class={'Btn green'} text={'Sell DOGECOIN'} />
        </div>
      </div>
    </div>
  );
}
export default Xcoin;
