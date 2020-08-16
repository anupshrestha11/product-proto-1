import React from "react";
import classes from "./Menu.module.scss";

const Menu = (props) => {
  const cross = props.cross ? classes.Cross : null;

  return (
    <div className={classes.Menu + " " + cross} onClick={() => props.clicked()}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Menu;
