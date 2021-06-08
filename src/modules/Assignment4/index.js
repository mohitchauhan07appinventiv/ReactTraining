import React from "react";
import "./index.css";


import UsingFlexWrap from './UsingFlexWrap';
// import UsingGrid from './UsingGrid';

export default function support() {
  return <div className={"mainWrapper"}>
    <UsingFlexWrap />
    {/* <UsingGrid /> */}
  </div>;
}
