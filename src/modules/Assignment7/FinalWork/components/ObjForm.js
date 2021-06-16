import React, { useState } from "react";
import useStyle from "./style";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";

const ObjForm = (props) => {
  const classes = useStyle();
  
  const selected = props.location.state.selected;
  const data = JSON.parse(localStorage.getItem("apiData"));
  
  const [isUpdated, setIsUpdated] = useState(false);
  const [values, setValues] = useState(data[selected]);
  const dataKeys = Object.keys(values);



  const handleChange = (e) => {
      const name = e.target.name;
      setValues({
          ...values,[name]:e.target.value
      })
  };


  const check = () => {
      setIsUpdated(true);
      data[selected] = values;
    //   console.log(data[selected]);
      window.localStorage.setItem('apiData',JSON.stringify(data));
  };

  return (
    <div className={classes.cardContainer}>
      <h1 className={classes.heading}>{"Change  Keys's Value Here"}</h1>
      <div className={classes.displayContainer}>
        <div className={classes.display}>
          <List component="nav" className={classes.title}>
            {dataKeys.map((val, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText key={index} primary={val} />
                <p className={classes.para}> : { isUpdated ? (values[val]):(data[selected][val])}</p>
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.formContainer}>
          <>
            {dataKeys.map((values, index) => (
              <>
                <TextField
                  key={index}
                  name={values}
                  fullWidth={true}
                  label={values}
                  onChange={handleChange}
                  variant="outlined"
                  margin={"normal"}
                />
              </>
            ))}
            <Button
              variant={"contained"}
              margin={"dense"}
              fullWidth={true}
              color={"secondary"}
              onClick={check}
              className={classes.submitBtn}
            >
              SUBMIT
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default ObjForm;
