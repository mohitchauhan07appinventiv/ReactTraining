import React from "react";
import "./index.css";
import Header from "./components/header";
import Banner from "./components/banner";
import images from "./utils/LoadImages";
import Card from "./components/card";
import Card2 from "./components/card2";
import HowTo from "./components/howto";
import WhyBuySellContent from "./components/whyBuySell";
import Button from "./components/button";
import circularImg from "./components/circularImg";
import CircularImg from "./components/circularImg";

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
          title2: "Get Your crypto now!",
        }}
      />
      <div className={"cardSection"}>
        <Card
          id={"card1"}
          class={"commonCard pink small"}
          src={images.masterCard}
          dots={"&bull&bull;&bull;&bull;"}
          bgcolor={"pink"}
          lastDigits={"4282"}
          holderName={"George Dux"}
          exDate={"09/15/2023"}
        />
        <Card
          id={"card2"}
          class={"commonCard blue large"}
          src={images.visaCard}
          dots={"&bul;l&bull;&bull;&bull;"}
          bgcolor={"blue"}
          lastDigits={"8242"}
          holderName={"John Connor"}
          exDate={"09/15/2023"}
        />
        <Card2
          title={"Exchange your Dogecoin Instantly!"}
          text={
            "Buy & sell your Doge using your Visa or Mastercard debit or credit card."
          }
        />
      </div>

      <div className="featureBox">
        <div className={"featuresSection"}>
          <div className={"bitcoinBg"}>
            <img
              className="bitcoinBgImg"
              src={images.bitcoinBg}
              alt="bitcoinBG Icon"
            />
          </div>
        </div>
        <HowTo
          title={"How to Buy Dogecoin"}
          text={"Only 3 simple steps"}
          ovalType="circleBlue"
          imageSrc={[images.tickBlue, images.walletBlue, images.clockBlue]}
          button={{ class: "Btn blue", text: "BUY DOGECOIN" }}
        />
      </div>
      <div className={"sell3Steps"}>
        <HowTo
          title={"How to Sell Dogecoin"}
          text={"Only 3 simple steps"}
          ovalType="squareGreen"
          imageSrc={[images.tickGreen, images.walletGreen, images.clockGreen]}
          button={{ class: "Btn green", text: "SELL DOGECOIN" }}
        />
      </div>
      <div className="WhyBuySellSection">
        <img src={images.whyBuySellSrc} alt="bannerImg" />
        <div className={"WhyBuySellContent"}>
          <h3 className={"headTitle"}>
            {"Why Buy & Sell Dogecoin with Xcoins?"}
          </h3>
          <div className={"WhyBuycomponentContainer1"}>
            <WhyBuySellContent
              imageSrc={images.lock}
              title={"Encryption technology"}
              text={
                "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
              }
            />
          </div>
          <div className={"WhyBuycomponentContainer2"}>
            <WhyBuySellContent
              imageSrc={images.message}
              title={"Customer care"}
              text={
                "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team."
              }
            />
            <div className={"signUpFloater"}>
              <h3>{"Buy & sell Dogecoin today"}</h3>
              <Button class={"Btn small blue"} text={"SIGN UP"} />
            </div>
          </div>
        </div>
      </div>

      <div className="whatIsDogecoinSection">
        <div className={"cardType"}>
          <img src={images.whatDoge1} alt={"icon"} />
          <div className="cardTypeContainer">
            <img src={images.tickBlack}></img>
            <h3>{"Decentralized"}</h3>
          </div>
        </div>
        <div className={"mainSection"}>
          <h2>{"What is Dogecoin?"}</h2>
          <p>
            {
              "Dogecoin (Doge) is a cryptocurrency created by software engineers in 2013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts."
            }
          </p>
        </div>
        <div className={"cardType second"}>
          <img src={images.whatDoge2} alt={"icon"} />
          <div className="cardTypeContainer">
            <img src={images.tickBlack}></img>
            <h3>{"Peer-To-peer"}</h3>
          </div>
        </div>
      </div>
      <h2 id={"WhereCanSpendTitle"}>{"Where Can I Spend my Dogecoin?"}</h2>
      <p id={"WhereCanSpendText"}>
        {
          "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
        }
      </p>
      <div className={"whereCanSpend featuresSection"}>
        <div className={"circularPhotoComponent"}>
          <CircularImg
            id={"firstImgComp"}
            src={images.group1}
            title={"CLOTHING STORES"}
          />
          <CircularImg src={images.group2} title={"DOMAINS & HOSTING"} />
          <CircularImg src={images.group3} title={"ONLINE CASINOS"} />
        </div>
      </div>
      <div className="IsDogeCoinForMeSection">
        <img src={images.isDogeCoinForMeImg} alt={'isDogeForME img'}/>
        <div className='maincontent'>
          <h2>{'Is Dogecoin For Me ?'}</h2>
          <p>{'Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment.'}</p>
          <div className={"signUpFloater"}>
              <h3>{"Buy & sell Dogecoin today"}</h3>
              <Button class={"Btn small blue"} text={"SIGN UP"} />
            </div>
        </div>
      </div>
    </div>
  );
}
export default Xcoin;
