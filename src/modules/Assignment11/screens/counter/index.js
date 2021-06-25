import React from "react";
import { incrementCount, decrementCount } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "47%",
    margin: "45px auto",
  },
});
function Counter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((state) => state);
  const { counter } = counterReducer;
  return (
    <div className={classes.mainContainer}>
      <Typography
        variant={"h1"}
        align={"center"}
      >{`Counter:${counter}`}</Typography>
      <Box className={classes.innerContainer}>
        <Button
          variant={"outlined"}
          color={"primary"}
          onClick={() => dispatch(incrementCount(1))}
        >
          {"Increment count"}
        </Button>
        <Button
          variant={"contained"}
          color={"secondary"}
          onClick={() => dispatch(decrementCount(1))}
        >
          {"Decrement count"}
        </Button>
      </Box>
    </div>
  );
}

export default Counter;
