import React from 'react';

export default function Navbar(props){
    return(
        <div className={"navbar"}>
        <ul>
          <li>
            <a href={"#BuyBitcoin"}>{props.data[0]}</a>
          </li>
          <li>
            <a href={"#Blog"}>{props.data[1]}</a>
          </li>
          <li>
            <a href={"#AboutUs"}>{props.data[2]}</a>
          </li>
          <li>
            <a href={"#SellBitcoin"}>{props.data[3]}</a>
          </li>
        </ul>
      </div>
    );
}