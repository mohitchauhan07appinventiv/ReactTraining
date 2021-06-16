import React from "react";
import useStyle from "./styles";
import { Stars } from "@material-ui/icons";
import { ListItemIcon, List, ListSubheader, ListItem, ListItemText, Typography } from "@material-ui/core";

const Display = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.display}>
      <Typography align={"center"} variant={"h4"}>
        {" "}
        Json Key Values
      </Typography>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {"Choose the Options From JSON FILE OBJECT KEYS"}
          </ListSubheader>
        }
        className={classes.root}
      >
        {props.dataKeys.map((values, index) => (
            <ListItem key={index} button>
                <ListItemIcon>
                    <Stars />
                </ListItemIcon>
                <ListItemText primary={values} />
            </ListItem>
        //   <p key={index}>{values}</p>
        ))}
      </List>
    </div>
  );
};
export default Display;
