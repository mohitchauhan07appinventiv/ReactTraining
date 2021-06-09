import React from "react";
import "./index.css";


import FlexOrGrid from './FlexOrGrid';
// import UsingGrid from './UsingGrid';

export default function support() {
  return <div className={"mainWrapper"}>
    <FlexOrGrid type={'  flex'}/>
    {/* <FlexOrGrid type={'Grid'}/> */}

  </div>;
}
