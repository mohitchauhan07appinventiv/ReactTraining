import React, { useContext } from "react";
import { AppContext } from "./index";
import {
  makeStyles,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Grid,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles({
  TopDiv: {
    height: "100vh",
    overflow: "hidden",
  },
  cardContainer: {
    width: "99%",
    margin: "30px 150px",
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    height: "250px",
    display: "flex",
    width: "490px",
  },

  dataContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "15px",
  },
  changeBtn: {
    height: "70px",
    width: "250px",
    margin: "20px 850px",
  },
});

function ColorsDetails() {
  const classes = useStyles();
  const [newState, dispatch] = useContext(AppContext);
  const { data, mainTheme, themeName } = newState;
  console.log(newState);
  return (
    <div style={mainTheme} className={classes.TopDiv}>
      <div className={classes.styleSwitchContainer}>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              onClick={() => dispatch({ type: "ChangeTheme" })}
            />
          }
          label={themeName}
          labelPlacement="bottom"
        />
      </div>
      <Typography className={classes.styleHeading} variant={"h2"} align={"center"}>
        {"Data Cards"}
      </Typography>
      <Grid className={classes.cardContainer} container spacing={6}>
        {data?.map((currData, index) => (
          <Grid key={index+5} item >
            <Card className={classes.card} style={{ backgroundColor: currData.color }}>
              <div className={classes.styleCardContent}>
                <Typography variant={"h4"} align={"center"}>
                  {"Data"}
                </Typography>
                <div className={classes.dataContainer}>
                  <Typography variant={"h5"}>{"color code:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {currData.color}
                  </Typography>
                </div>
                <div className={classes.dataContainer}>
                  <Typography variant={"h5"}>{"color name:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {currData.name}
                  </Typography>
                </div>
                <div className={classes.dataContainer}>
                  <Typography variant={"h5"}>{"pantone value:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {currData.pantone_value}
                  </Typography>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant={"contained"}
        className={classes.changeBtn}
        color={"primary"}
        onClick={() => dispatch({ type: "ChangeCardColor" })}
      >
        {"Change Card Color"}
      </Button>
    </div>
  );
}

export default ColorsDetails;
