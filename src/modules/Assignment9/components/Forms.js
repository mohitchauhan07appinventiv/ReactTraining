import { TextField } from "@material-ui/core";
import React from "react";

const Forms = (props) => {
  const { handleChange } = props;
  return (
    <>
      <TextField
        variant={"outlined"}
        name={'name'}
        label={"Enter Your Name"}
        onChange={handleChange}
        type={'text'}
        fullWidth={true}
        margin={'normal'}
        // error={errors.nameError}
        required
      />
      <TextField
        variant={"outlined"}
        name={'email'}
        label={"Enter Email Address"}
        onChange={handleChange}
        type={'email'}
        fullWidth={true}
        margin={'normal'}
        // error={errors.emailError}
        required
      />
      <TextField
        variant={"outlined"}
        name={'password'}
        label={"Enter Password"}
        onChange={handleChange}
        type={'password'}
        fullWidth={true} 
        margin={'normal'} 
        // error={errors.passwordError}
        required
      />
    </>
  );
};

export default Forms;
