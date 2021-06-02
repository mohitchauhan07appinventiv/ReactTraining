import React from "react";
class Banner extends React.Component {
  render() {
    return (
      <div>
        <p className={'bannerHeading'}>
          Save your<span className={"moneyNowText"}> money now.</span>
        </p>
        <p className={"bannerText para1"}>
          Manage your company Bot in few easy steps, join our Pro plan to try a
          360&#176; experience of our service.
        </p>
        <p className={"bannerText para2"}>
          Start your 14 days of free Pro plan, you can always upgrade it or stay
          with the Lite version for free.
        </p>
        <img className={'bannerImage'} src='images/bannerImage.png' alt='Banner Icon'/>
      </div>
    );
  }
}
export default Banner;
