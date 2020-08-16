import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  return <li className={classes}>{props.children}</li>;
};

export default Navigation;
