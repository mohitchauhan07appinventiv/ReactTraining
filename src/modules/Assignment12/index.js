import React, { useEffect } from "react";
import { useDispatch, 
    useSelector } from "react-redux";
import { colors } from "./components/actions";
import { 
    Card, 
    Box, 
    makeStyles, 
    Grid } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    fontSize: "50px",
  },
  mainContainer: {
    width: "99%",
    margin: "30px auto",
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    height: "300px",
    display: "flex",
  },
  textBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "15px",
  },
});

const Assignment12 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { Data } = useSelector((state) => state.apiReducer);

  useEffect(() => {
    dispatch(colors());
  }, [dispatch]);

  return (
    <>
      <h1 className={classes.heading}>{"API DATA"}</h1>
      <Grid className={classes.mainContainer} container spacing={6}>
        {Data?.map((data, index) => (
          <Grid key={index} item lg={6}>
            <Card className={classes.card}>
              <Box>
                <h1>{"Details"}</h1>
                <Box className={classes.textBox}>
                  <h2>{"color name - "}</h2>
                  <h3>{data.name}</h3>
                </Box>

                <Box className={classes.textBox}>
                  <h2>{"color code - "}</h2>
                  <h3>{data.color}</h3>
                </Box>
                <Box className={classes.textBox}>
                  <h2>{"pantone value - "}</h2>
                  <h3>{data.pantone_value}</h3>
                </Box>
                <Box className={classes.textBox}>
                  <h2>{"year - "}</h2>
                  <h3>{data.year}</h3>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Assignment12;
