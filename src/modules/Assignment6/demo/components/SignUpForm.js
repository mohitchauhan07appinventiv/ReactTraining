import React from "react";
import { useState } from "react";
import useStyle from '../style';
import {
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



const SignUpForm = (props) => {
  const classes = useStyle();

  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleClickShowPassword = (event) => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  var [userError, setUserError] = useState(false);
  var [emailError, setEmailError] = useState(false);
  var [passwordError, setPasswordError] = useState(false);

  const validation = () => {
    if (values.userName === "" || values.userName.length > 10)
      setUserError((userError = true));
    else setUserError(false);

    if (
      values.email === "" ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    )
      setEmailError((emailError = true));
    else setEmailError(false);

    if (
      values.password === "" ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    )
      setPasswordError((passwordError = true));
    else setPasswordError(false);
  };

  const check = (event) => {
    validation();

    if (!userError && !emailError && !passwordError) {
      props.render(); // to set property of index render to render loginPage if successfull
      // Check browser support
      if (typeof Storage !== "undefined") {
        // Store
        localStorage.setItem("username", values.userName);
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
      } else {
        document.getElementById("result").innerHTML =
          "Sorry, your browser does not support Web Storage...";
      }
    }
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={check} autoComplete="off">
        <TextField
          variant={"outlined"}
          name={"userName"}
          label={"Enter Your User Name"}
          margin={"normal"}
          fullWidth={true}
          onChange={handleChange}
          error={userError}
        />
        <TextField
          variant={"outlined"}
          name={"email"}
          label={"Enter Your Email Address"}
          margin={"normal"}
          fullWidth={true}
          onChange={handleChange}
          error={emailError}
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
            onChange={handleChange}
            name="password"
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
          className={classes.submitBtn}
          variant="contained"
          color="primary"
        >
          sign up
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
