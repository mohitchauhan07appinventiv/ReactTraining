import React, { useState } from "react";
import useStyle from "./style";
import Forms from "./Forms";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const classes = useStyle();
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const name = e.target.name;
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const handleOnclick = () => {
    if (localStorage.getItem("access_token") == null) {
      localStorage.setItem("access_token", "aabababba-aszzz--zdfsdf");
    }
    localStorage.setItem('credentials',JSON.stringify(values));
    //----------------------------------------------------------------Redirect to Dashboard
    history.push("/dashboard");
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
