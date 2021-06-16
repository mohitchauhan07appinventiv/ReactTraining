import React, { useState } from "react";
import useStyle from "./styles";
import { TextField, Typography, Button } from "@material-ui/core";
// import EditIcon from "@material-ui/icons/Edit";

const DisplayEdit = (props) => {
  const classes = useStyle();
  const [choose, setChoose] = useState({
    option: "",
    info: "",
  });

  const check = () => {
    localStorage.setItem("customJSON", JSON.stringify(data));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setChoose({
      ...choose,
      [name]: event.target.value,
    });
  };
  //  const Info = ['abc'];
  //  const car = ['','','',''];

  const inputFields = (event) => {
    if (selectedString === "Info") {
      data.Info = choose.info;
      return (
        <TextField
          variant={"outlined"}
          name={"info"}
          onChange={handleChange}
          label="info"
        ></TextField>
      );
    }
  };

  const data = JSON.parse(localStorage.getItem("customJSON"));
  const selectedString = props.title;
  // const dataArray = Object.keys(data);
  console.log(data);

  return (
    <>
      <div className={classes.editContainer}>
        <div className={classes.editDisplay}>
          {selectedString === "Info" ? (
            <>
              <Typography variant="h4">{selectedString}</Typography>
              <Typography variant="body1">{data[selectedString]}</Typography>
            </>
          ) : (
            {}
          )}
        </div>
        <div className={classes.formContainer}>
          {inputFields()}
          <Button onClick={check} variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default DisplayEdit;
