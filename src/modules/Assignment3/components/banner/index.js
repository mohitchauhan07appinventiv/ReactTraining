import React from "react";
import "./index.css";
import Button from "../button";
import images from "../../utils/LoadImages";

export default function Banner(props) {
  function changeCurrency(){
    const selectElement = document.getElementById('currencySelect');
    const flagImgEle = document.getElementById('currencyImage');
    var select = selectElement.selectedIndex;
    if (select === 1) flagImgEle.setAttribute("src", images.flagSpanish);
    else if (select === 2) flagImgEle.setAttribute("src", images.bitCoin);
    else flagImgEle.setAttribute("src", images.flagUsa);
  }
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
          <img src={images.flagUsa} id={'currencyImage'}alt={"usa flag"} />
          <input type={"number"} name={"currency"} placeholder={"100"} />
          <div className={"vl"}></div>
          <select name={"currencySelect"} id={"currencySelect"} onChange={changeCurrency}>
            <option value={"usd"}>{"USD"}</option>
            <option value={"spanish"}>{"ESP"}</option>
            <option value={"btc"}>{"BTC"}</option>
          </select>
        </div>
        <div className={'hl'}></div>
        <div className={"currencyInput"}>
          <img src={images.bitCoin} alt={"bitCoin Img"} />
          <input type={"number"} name={"currency"} placeholder={"0.10546074"} />
          <div className={"vl"}></div>
          <img id={'bitcoinCovertImg'}src={images.bitCoin} alt={"bitCoin Img"} />
          <select name={"currencySelect"} id={"currencSelect"}>
            
          </select>
        </div>
        <div className={"getCryptoBtn"}>
          <Button class={"Btn green big"} text={"BUY DOGE"} />
        </div>
      </div>
    </div>
  );
}
