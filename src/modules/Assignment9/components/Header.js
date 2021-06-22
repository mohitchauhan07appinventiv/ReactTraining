import React from 'react'
import Button from "./Button";
import useStyle from './style';


const Header = (props) => {
    const classes = useStyle();

    return (
        <div className={classes.navBarContainer}>
            <h2 className={classes.heading}>{props.text}</h2>
            <Button
              text={"Sign Out"}
              color={"primary"}
              variant={"outlined"}
              handleOnclick={props.handleOnclick}
            />
          </div>
    )
}

export default Header
