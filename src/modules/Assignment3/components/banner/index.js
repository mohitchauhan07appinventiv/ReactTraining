import React from "react";
import "./index.css";
import Button from "../button";
import images from "../../utils/LoadImages";

export default function Banner(props) {
  return (
    <div className={"bannerWrapper"}>
      <div className={"bannerContent"}>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>{props.data.text1 + props.data.text2}</p>
        {/* <p>{props.data.text2}</p> */}
      </div>
      <div className={"getYourCryptoArea"}>
        <h3 className={"getYourCryptoText"}>{props.data.title2}</h3>
        <div className="buySellSection">
          <button id={"buyBtn"}>{"BUY"}</button>
          <button id={"sellBtn"}>{"SELL"}</button>
        </div>
        <div className={"currencyInput"}>
          <img src={images.flagUsa} alt={"usa flag"} />
          <input type={"number"} name={"currency"} placeholder={"100"} />
          <div className={"vl"}></div>
          <select name={"currencySelect"} id={"currencSelect"}>
            <option value={"usd"}>{"USD"}</option>
            <option value={"inr"}>{"INR"}</option>
            <option value={"btc"}>{"BTC"}</option>
          </select>
        </div>
        <div className={'hl'}></div>
        <div className={"currencyInput"}>
          <img src={images.bitCoin} alt={"bitCoin Img"} />
          <input type={"number"} name={"currency"} placeholder={"0.10546074"} />
          <div className={"vl"}></div>
          <select name={"currencySelect"} id={"currencSelect"}>
            <option value={"btc"}>{"BTC"}</option>
            <option value={"inr"}>{"INR"}</option>
            <option value={"usd"}>{"USD"}</option>
          </select>
        </div>
        <div className={"getCryptoBtn"}>
          <Button class={"Btn green big"} text={"BUY DOGE"} />
        </div>
      </div>
    </div>
  );
}
