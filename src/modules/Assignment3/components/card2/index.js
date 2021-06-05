import React from "react";
import './index.css'
export default function Card2(props) {
  return(
    <div className={'exchangeDogeCard'}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}
