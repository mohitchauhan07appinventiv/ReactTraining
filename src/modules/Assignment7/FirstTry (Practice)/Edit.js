import React from "react";
import useStyle from './components/styles';
import Display from './components/DisplayEdit';

const Edit = (props) => {
  const classes = useStyle();
  const selected = props.location.state.option;
  const isInfo = props.location.state.info;
  const isBike = props.location.state.bike;
  const isCar = props.location.state.car;

  console.log(isInfo, isBike, isCar);  
  const string = 'Hello there'
  return (
    <div className={classes.cardContainer}>
      <Display text = {string} title={selected}/>
      <div className={classes.btnContainer}>

      </div>
    </div>
  );
};

export default Edit;
