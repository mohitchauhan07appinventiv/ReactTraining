import React from "react";
import "./index.css";

export default function Header(porps) {
  return (
    <div className="headerContainer">
      <div className={"oval"}>
        <div className={"hl one"}></div>
        <div className={"hl two"}></div>
        <div className={"hl three"}></div>
      </div>
        <figure className={"logo"}>
          <img src={porps.images.logo} alt={"companyLogo"} />
        </figure>
      <div className="Icons">
        <figure className={"settings"}>
          <img src={porps.images.settings} alt={"settingsGearIcon"} />
        </figure>
        <figure className={"notification"}>
          <img src={porps.images.notification} alt={"notificationIcon"} />
        </figure>
        <figure className={"profilePic"}>
          <img src={porps.images.profile} alt={"profilePic"} />
        </figure>
      </div>
    </div>
  );
}
