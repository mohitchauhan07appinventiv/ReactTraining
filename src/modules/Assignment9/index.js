import React,{useEffect, useState} from "react";
import LoginPage from "./components/LoginPage";
import useStyle from "./components/style";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import ProductDetailPage from "./components/ProductDetailPage";
import axios from 'axios';

function PrivateRouting(props) {
  if (localStorage.getItem("access_token") == null) {
    return <Redirect to="/" />;
  } else {
    return <Route {...props} />;
  }
}

function Assignemnt9() {
  const classes = useStyle();
  const [data,setData]=useState([]);

  const handleSetData = (obj,type) =>{
      if(type=='add'){
          console.log(obj);
          console.log(data);
          data.splice(data.length,0,obj);
          setData(data);
      }
  }
  console.log(data, 'from index')

  const apiCall = async () => {
    try {
      const apiData = await axios.get("https://reqres.in/api/users");
      setData(apiData.data.data);
    } catch (e) {
      alert("cannot fetch data try again after some time");
    }
  }
  useEffect(()=>{
    apiCall();
  },[])


  return (
    <>
      <Router>
        <div className={classes.mainContainer}>
          <Switch>
            <PrivateRouting
              path={"/dashboard"}
            //   component={DashboardPage}
              render={()=><DashboardPage data={data} handleSetData={handleSetData} />}
              exact
            />
            <PrivateRouting
              path={"/dashboard/product/:id"}
            //   component={ProductDetailPage}
              render={()=><ProductDetailPage data={data} handleSetData={handleSetData} />}
              exact
            />
            <Route path={"/"} component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Assignemnt9;
