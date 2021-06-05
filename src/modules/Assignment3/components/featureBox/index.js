import React from "react";
import './index.css';
export default function FeatureBox(props) {
  return(
    <div className={'boxContainer'}>
        <img src={props.src} alt={'icons'}/>
        <div className={'ovalTitleContainer'}>
          <div className={props.data.oval}>
              <span className={"ovalText"}>
                {props.data.step}
              </span>
          </div>
          <h3>{props.data.title}</h3>
        </div>
        <p>{props.data.text}</p>
    </div>
  );
}
