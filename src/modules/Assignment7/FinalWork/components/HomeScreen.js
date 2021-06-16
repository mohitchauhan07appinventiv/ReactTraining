import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useStyle from "./style";

const HomeScreen = () => {
  const classes = useStyle();
  const history = useHistory();

  const dataKeys = Object.keys(JSON.parse(localStorage.getItem("apiData")));
  const [currState, setCurrState] = useState("");

  const handleChange = (e) => {
    setCurrState(e.target.value);
  };

  const check = (e) => {
    //  console.log(document.getElementById('select').value);
    if (currState === "Info") {
        history.push({
            pathname:'/StringForm',
            state:{
                selected : currState
            }
        })
    } else if (currState === "dealer" || currState === "customer") {
        history.push({
            pathname:'/ObjForm',
            state:{
                selected : currState
            }
        })
    } else if (currState === "bikes" || currState === "cars") {
        history.push({
            pathname:'/ArrayForm',
            state:{
                selected : currState
            }
        })
    }
  };
  return (
    <div className={classes.cardContainer}>
      <h1 className={classes.heading}>{"Select API Parsed Key's"}</h1>
      <div className={classes.displayContainer}>
        <div className={classes.display}>
          <List component="nav" className={classes.title}>
            {dataKeys.map((values, index) => (
              <ListItem key={index} button>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary={values} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.formContainer}>
          <>
            <TextField
              id="select"
              select
              margin={"normal"}
              fullWidth={true}
              label="Select Keys"
              variant="outlined"
              onChange={handleChange}
              SelectProps={{
                native: true,
                name: "select",
              }}
            >
              <option></option>
              {dataKeys.map((value, index) => (
                <option key={index}>{value}</option>
              ))}
            </TextField>
            <Button
              variant={"contained"}
              margin={"dense"}
              fullWidth={true}
              color={"secondary"}
              onClick={check}
            >
              SUBMIT
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
