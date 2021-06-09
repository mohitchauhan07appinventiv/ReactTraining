import React from "react";
import "./index.css";
import images from "./utils/LoadImages";

import Header from "./Header";
import Card from "./components/card";

export default function FlexOrGrid(props) {
  const image = {
    logo: images.logo,
    settings: images.settings,
    notification: images.notification,
    profile: images.profile,
   
  };
 
  return (
    <div>
      {/* ----------------------- Header Start */}
      <Header images={image} />
      {/* ------------------------ Header Ends */}

      <div className={"contentSection"}>
        <div className={"navBar"}>
          <img src={images.logo} alt={'xcoinLogo'} />
          <p>{'TOPICS'}</p>
          <ul>
            <li><a href="#affiliate">{'Affilate Program'}</a></li>
            <li><a href="#buysell">{'Buy & Sell Cryptocurrencies'}</a></li>
            <li><a href="#contact">{'Contact Us'}</a></li>
            <li><a href="#myAccount">{'My Xcoins Account'}</a></li>
            <li><a href="#orders">{'Orders'}</a></li>
            <li><a href="#payment">{'Payment Methods'}</a></li>
            <li><a href="#secuirty">{'Security'}</a></li>
            <li><a href="#verification">{'Verification'}</a></li>
            <li><a href="#wallet">{'Wallet'}</a></li>
          </ul>
        </div>
        <div className={"supportSection"}>
          {/* ------------------------ Support Title Start */}
          <div className={"supportTitle"}>
            <div>
              <h1>{"Support"}</h1>
            </div>
            <div className={"side_container"}>
              <img src={images.flagUsa} alt={"USA Images"} />
              <select>
                <option>{"ENG"}</option>
              </select>
              <button>{"BACK TO XCOINS"}</button>
            </div>
          </div>
          {/* ------------------------ Support Title END */}

          {/* ------------------------ Search Bar Section Start */}
          <div className={"searchBar"}>
            <img src={images.search} alt={"searchIcon"} />
            <input type={"text"} placeholder={"Search Xcoins support"} />
          </div>
          {/* ------------------------ Search Bar Section End */}

          {/* ------------------------ Cards Section Start */}
          <div className={"cardSection"+props.type}>
            <Card
              title={"Buy currency"}
              class={"cardContainer"+props.type}
              data={[
                "What currencies do we accept?",
                "What is the minimum order amount?",
                "What is a Cash Advance Fee?",
                "Ethereum orders and smart contracts",
              ]}
            />
            <Card
              title={"Verification"}
              class={"cardContainer"+props.type}
              data={[
                "ID verification documents submitted",
                "How should you take the perfect selfie",
                "What ID can you use to sign up",
                "Your application to join Xcoins was",
                "How to make sure your verification",
              ]}
            />
            <Card
              title={"Orders"}
              class={"cardContainer"+props.type}
              data={[
                "Resetting your password",
                "What does order completed mean?",
                "Why has my order failed?",
                "What does order cancelled mean?",
                "Why does it take time to receive my",
              ]}
            />
            <Card
              title={"Wallet"}
              class={"cardContainer"+props.type}
              data={[
                "What is my wallet address?",
                "What is a destination tag and why",
                "What are cold wallets?",
                "What are hot wallets?",
                "What is a wallet",
              ]}
            />
            <Card
              title={"Payment methods"}
              class={"cardContainer"+props.type}
              data={[
                "Accepted credit/debit cards",
                "Overview of bank fees - Cash advance",
              ]}
            />
            <Card
              title={"Other"}
              class={"cardContainer"+props.type}
              data={[
                "What are our business hours?",
                "How can I contact Xcoins?",
                "Why have I not received my email",
                "Why can't I access my brand new",
              ]}
            />
            <Card
              title={"Security"}
              class={"cardContainer"+props.type}
              data={[
                "How can I protect myself from scams?",
                "Forgotten your password?",
                "Create a strong password",
              ]}
            />
            <Card
              title={"Referral programme"}
              class={"cardContainer"+props.type}
              data={["How does the Xcoins affiliate program"]}
            />
          </div>
          {/* ------------------------ Cards Section Ends */}
        </div>
      </div>
    </div>
  );
}
