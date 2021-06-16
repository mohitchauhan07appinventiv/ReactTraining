import React from "react";
import { Button } from "@material-ui/core";
import styleSheet from "./components/style";

const index = () => {
  const classes = styleSheet();
  const column = [
    {
      id: "empName",
      label: "Employee Name",
      minWidth: 170,
    },
    {
        id:'desig',
        label:'Designation',
        minWidth:200,
    },
    {
        id:'tech',
        label:'Technology',
        minWidth:'100'
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <div className={classes.cardContainer}>
        <h4 className={classes.heading}>{"Appinventiv"}</h4>
        <Button
          variant={"contained"}
          className={classes.submitBtn}
          color={"primary"}
        >
          {" "}
          {"Add Employe"}{" "}
        </Button>
      </div>
    </div>
  );
};

export default index;
