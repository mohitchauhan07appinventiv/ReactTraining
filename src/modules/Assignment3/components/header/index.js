import React from "react";
import Language from "./ChangeLanguage";
import Button from "./HeaderButton";
import Navbar from "./Navbar";
import Logo from './logo';

export default function Header(props) {
  return (
    <header>
      <div className={"head_wrapper"}>
        {/* logo */}
        <Logo src={props.logo} />
        {/* navbar */}
        <Navbar data={["BUY BITCOIN", "BLOG", "ABOUT US", "SELL BITCOIN"]} />
        {/* Right Buttons section */}
        <div className={"login_signup_container"}>
          {/* change language section */}
          <Language />
          {/* login Button  */}
          <Button class={"login_container"} data={"LOGIN"} />
          {/* signUp Button */}
          <Button class={"signup_container"} data={"SIGN UP"} />
        </div>
      </div>
    </header>
  );
}
