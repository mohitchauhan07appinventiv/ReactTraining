import React, { useState, useEffect } from "react";
import useStyle from './style';
import {
  Typography,
  CardMedia,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


export default function SignUp(props) {
  const classes = useStyle();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const signupValues = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const validation = () => {
    if (values.email === "" || !values.email === signupValues.email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (values.password === "" || !values.password === signupValues.password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    
  };
  
  useEffect(() => {
    if(!emailError && !passwordError && isSubmit){
      props.renderToMovie();
    }else{
      console.log('sorry');
    }
  }, [emailError, passwordError, isSubmit,props]);

  const check = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    validation();
  
  };

  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.loginFormContainer}>
          <Typography className={classes.loginTitle} variant={"h4"}>
            {"Login Here"}
          </Typography>
          <form onSubmit={check} autoComplete="off">
            <TextField
              id="outlined-basic-1"
              error={emailError}
              label="Enter Email Address"
              variant="outlined"
              className={classes.userName}
              fullWidth={true}
              margin="normal"
              onChange={handleChange("email")}
            />

            <FormControl
              variant="outlined"
              margin="normal"
              fullWidth={true}
              error={passwordError}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Button
              type="submit"
              className={classes.loginBtn}
              variant="contained"
              color="primary"
            >
              LOG IN
            </Button>
            <Typography className={classes.orText}>{"Or"}</Typography>
            <Button
              onClick={() => {
                props.render();
              }}
              className={classes.signupBtn}
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </form>
        </div>

        <CardMedia
          className={classes.loginMedia}
          image="images/assignment6/bannerImg3.png"
          title="Login"
        />
      </div>
    </>
  );
}
