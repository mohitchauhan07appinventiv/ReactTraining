import React, { useState } from "react";
import useStyles from "./components/styles";
import Display from "./components/Display";
import { Button, FormControl, InputLabel, Select } from "@material-ui/core";
// import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Home = (props) => {
  const classes = useStyles();
  const [options, setOptions] = useState({
    selected: "",
  });
  const dataKeys = Object.keys(props.data);

  const [info, setInfo] = useState(false);
  const [bikes, setBike] = useState(false);
  const [cars, setCar] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    setOptions({
      ...options,
      [name]: event.target.value,
    });
    if (options.selected === "Info") {
      setInfo(true);
      setBike(false);
      setCar(false);
    } else if (options.selected === "bikes") {
      setBike(true);
      setInfo(false);
      setCar(false);
    } else if (options.selected === "cars") {
      setCar(true);
      setInfo(false);
      setBike(false);
    }
  };

  // console.log(options.selected==="Info" + ' hahah');
  return (
    <div className={classes.cardContainer}>
      <Display data={props.data} dataKeys={dataKeys} />
      <div className={classes.btnContainer}>
        <FormControl variant="outlined" className={classes.formControlSelect}>
          <InputLabel htmlFor="keySelect">Select Key</InputLabel>
          <Select
            native
            value={options.selected}
            onChange={handleChange}
            inputProps={{
              name: "selected",
              id: "keySelect",
            }}
          >
            <option aria-label={"none"} value={""} />
            {dataKeys.map((values, index) => {
              return <option key={index}>{values}</option>;
            })}
          </Select>
        </FormControl>
        <Link
          to={{
            pathname: "/edit",
            state: {
              option: options.selected,
              info: info,
              bike: bikes,
              car: cars,
            },
          }}
          exact
        >
          <Button
            className={classes.Btn}
            variant="contained"
            startIcon={<AddIcon />}
          >
            {props.fetch ? "SUBMIT" : "FETCH DATA"}
          </Button>
        </Link>
      </div>
    </div>
    //   {/* <Button
    //     className={classes.Btn}
    //     variant="contained"
    //     // onClick={"click"}
    //     startIcon={<EditIcon />}
    //   >
    //     {"EDIT"}
    //   </Button> */}
  );
};

export default Home;
