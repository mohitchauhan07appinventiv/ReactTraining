import React from "react";
import './index.css';
export default function Button(props) {
  return (
    <button className={props.class}>
      <span className={props.spanClass}>{props.text}</span>
    </button>
  );
}
