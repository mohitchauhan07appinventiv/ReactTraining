import React, { useEffect, useState } from "react";
import useStyle from "./style";
import Forms from "./Forms";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
  const classes = useStyle();
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  let error = false;
  

// API Stored Email And password for verification
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }


  const apiCall = async () => {
    try{
      const res = await axios.post("https://reqres.in/api/login",{
        email:values.email,
        password:values.password
      });
      error=false;
      return res.data.token;

    }catch (e){
      // console.log(e);
      error = true;
    }   
  };


  const handleChange = (e) => {
    const name = e.target.name;
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const handleOnclick = async() => {

    if (localStorage.getItem("access_token") == null) {
      const credentials =  await apiCall();
      if(credentials){
        localStorage.setItem("access_token", credentials);
      }
    }
    console.log(error)
    if(!error){
      localStorage.setItem('credentials',JSON.stringify(values));
      //----------------------------------------------------------------Redirect to Dashboard
      history.push("/dashboard");
    }else{
      alert('invalid credentials, Try Again')
    }
  };

  return (
    <>
      <div className={classes.cardContainer}>
        <div className={classes.display}>
          <img
            className={classes.loginImg}
            src={"images/assignment9/bannerImg3.jpg"}
            alt={"loginImg"}
          ></img>
        </div>
        <div className={classes.form}>
          <h1 className={classes.heading}>{"LOGIN HERE"}</h1>
          <div className={classes.formContainer}>
            <Forms handleChange={handleChange}/>
          </div>
          <Button
            variant={"contained"}
            color={"primary"}
            btnClass={classes.submitBtn}
            handleOnclick={handleOnclick}
            text={"LOGIN"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
