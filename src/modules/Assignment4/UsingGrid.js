import React from 'react';
import images from './utils/LoadImages';
import Card from './components/card';
import Header from './header';
import './index.css';

export default function Grid(){
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
          
                {/* ------------------------ Support Title Start */}
                <div className={"supportTitle"}>
                  <h1>{"Support"}</h1>
                </div>
                {/* ------------------------ Support Title END */}
          
                {/* ------------------------ Search Bar Section Start */}
                <div className={"searchBar"}>
                  <img src={images.search} alt={"searchIcon"} />
                  <input type={"text"} placeholder={"Search Xcoins support"} />
                </div>
                {/* ------------------------ Search Bar Section End */}
          
                {/* ------------------------ Cards Section Start */}
                <div className={"gridSection"}>
                  <Card
                  class={'gridSection'}
                    title={"Buy currency"}
                    data={[
                      "What currencies do we accept?",
                      "What is the minimum order amount?",
                      "What is a Cash Advance Fee?",
                      "Ethereum orders and smart contracts"
                    ]}
                  />
                  <Card
                  class={'gridSection'}
                    title={"Verification"}
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
                    data={[
                      "Resetting your password",
                      "What does order completed mean?",
                      "Why has my order failed?",
                      "What does order cancelled mean?",
                      "Why does it take time to receive my"
                    ]}
                  />
                  <Card
                    title={"Wallet"}
                    data={[
                      "What is my wallet address?",
                      "What is a destination tag and why",
                      "What are cold wallets?",
                      "What are hot wallets?",
                      "What is a wallet"
                    ]}
                  />
                  <Card
                    title={"Payment methods"}
                    data={[
                      "Accepted credit/debit cards",
                      "Overview of bank fees - Cash advance"
                    ]}
                  />
                  <Card
                    title={"Other"}
                    data={[
                      "What are our business hours?",
                      "How can I contact Xcoins?",
                      "Why have I not received my email",
                      "Why can't I access my brand new",
                    ]}
                  />
                  <Card
                    title={"Security"}
                    data={[
                      "How can I protect myself from scams?",
                      "Forgotten your password?",
                      "Create a strong password"
                    ]}
                  />
                  <Card
                    title={"Referral programme"}
                    data={[
                      "How does the Xcoins affiliate program",
                    ]}
                  />
                  
                </div>
                {/* ------------------------ Cards Section Ends */}
              
            </div>
      );
}