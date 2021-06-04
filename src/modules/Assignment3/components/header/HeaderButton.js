import React from "react";

export default function HeaderButton(props) {
  return (
    <div className={props.class}>
      <button><span>{props.data}</span></button>
    </div>
  );
}
