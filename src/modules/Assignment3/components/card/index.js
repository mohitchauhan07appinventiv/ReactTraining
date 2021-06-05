import React from "react";
import "./index.css";
export default function Card(props) {
  return (
    <div className={props.class}>
      <img src={props.src} alt='cardType icon'/>
      <div className={"cardNumber"}>
        <span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </span>
        <span className={"dots"}>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </span>
        <span className={"dots"}>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
          <span>&bull;</span>
        </span>
        <span className={"dots"}>{props.lastDigits}</span>
      </div>
      <div className={"holderExpirySection"}>
        <div className={"cardHolderSection"}>
          <p>Card Holder</p>
          <h3>{props.holderName}</h3>
        </div>
        <div className={"expirySection"}>
          <p>Expiry Date</p>
          <h3>{props.exDate}</h3>
        </div>
      </div>
    </div>
  );
}
