import React, { useState, useEffect } from "react";
import useStyles from "./components/styles";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
// import data from "./components/data";
import data2 from './components/data2';
import Edit from './Edit';

const Assignment7 = () => {
  const classes = useStyles();
  const [isFetched, setIsFetched] = useState(false);
  const [ApiData, setApiData] = useState({});

  //   const fetchData = () => {
  //     if (localStorage.getItem("fetchApi") === null) {
  //       fetch("https://ebay-com.p.rapidapi.com/products/647865100010", {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-key":
  //             "d9fac130eamshc65ca9427e906cdp1a68dajsn50f87579fc97",
  //           "x-rapidapi-host": "ebay-com.p.rapidapi.com",
  //         },
  //       })
  //         .then((apiData) => {
  //           return apiData.json();
  //         })
  //         .then((actualData) => {
  //           localStorage.setItem("fetchApi", JSON.stringify(actualData));
  //           console.log("Fetched Data Successfully");
  //           setIsFetched(true);
  //         })
  //         .catch((error) => {
  //           console.log(`caught an error -- > ${error}`);
  //         });
  //     } else {
  //       console.log("Data Already Present, Did not fetched Data");
  //     }
  //   };
  //   console.log(JSON.parse(localStorage.getItem("fetchApi")));

  const customJson = () => {
    if (!isFetched || localStorage.getItem("customJSON") == null) {
      localStorage.setItem("customJSON", JSON.stringify(data2));
      setIsFetched(true);
      console.log("get data successful");
    } else {
      console.log("data Already Fetched");
    }
  };
  useEffect(() => {
    setApiData(data2);
  }, []);
  return (
    
      <div className={classes.mainContainer}>
        {isFetched ? null : customJson()}
        <Switch>
            <Route exact path={'/'} render={()=><Home fetch={isFetched} data={ApiData} />} />
            <Route path={'/edit'} component={Edit} />
        </Switch>
        
      </div>
    
  );
};

export default Assignment7;
