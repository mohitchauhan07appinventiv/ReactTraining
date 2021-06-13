import React from "react";
import SignUpForm from "./components/SignUpForm";
import { Typography, CardMedia } from "@material-ui/core";
import useStyle from './style';


const SignUp2 = (props) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.signUpContainer}>
        <CardMedia
          className={classes.media}
          image="images/assignment6/bannerImg3.jpg"
          title="SignUp"
        />
        <div className={classes.signUpFormContainer}>
          <Typography className={classes.signupTitle} variant={"h4"}>
            {"Sign Up Here"}
          </Typography>
          <SignUpForm render={props.render} />
        </div>
      </div>
    </>
  );
};

export default SignUp2;
