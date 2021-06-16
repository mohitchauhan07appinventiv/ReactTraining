import React, {useEffect, useState} from "react";
import useStyle from "./style";
import { Button, TextField } from "@material-ui/core";

const StringForm = (props) => {
  const classes = useStyle();
  const [changedString, setChangedString]=useState("");
  
  const handleChange = (e) => {
      setChangedString(e.target.value);
    }
    
    const selected = props.location.state.selected;
    const data = JSON.parse(localStorage.getItem("apiData"));
    const [dataUpdated, setDataUpdated]=useState(data);

    useEffect(()=>{
        window.localStorage.setItem('apiData',JSON.stringify(dataUpdated));
    },[dataUpdated])

  const check = () => {
    //   data[selected]=changedString;
    data[selected] = changedString;
    setDataUpdated(data);
    
  }
  return (
    <div className={classes.cardContainer}>
      <h1 className={classes.heading}>{"Selected String Key, Update Value"}</h1>
      <div className={classes.displayContainer}>
        <div className={classes.display}>
          <h2 className={classes.title}>{selected} :</h2>
          <p className={classes.para}>{dataUpdated[selected]}</p>
        </div>
        <div className={classes.formContainer}>
          <TextField
            id="stringInput"
            fullWidth={true}
            label="Edit String"
            onChange={handleChange}
            variant="outlined"
            margin={'normal'}
          />
          <Button
            variant={"contained"}
            fullWidth={true}
            color={"secondary"}
            onClick={check}
            margin={'normal'}
          >
            EDIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StringForm;
