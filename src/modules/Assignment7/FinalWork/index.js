import React from "react";
import useStyle from "./components/style";
import data from "./components/data";
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomeScreen";
import StringForm from "./components/StringForm";
import ObjForm from "./components/ObjForm";
import ArrayForm from "./components/ArrayForm";
// import { Typography } from '@material-ui/core'

const Assign7 = () => {
  const classes = useStyle();
  if (window.localStorage.getItem("apiData") === null) {
    window.localStorage.setItem("apiData", JSON.stringify(data));
  }

  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/stringform"} component={StringForm} />
        <Route exact path={"/objform"} component={ObjForm} />
        <Route exact path={"/arrayform"} component={ArrayForm} />
      </Switch>
    </div>
  );
};
export default Assign7;
