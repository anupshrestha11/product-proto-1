import React from "react";
import classes from "./SideBar.module.scss";
import Navigations from "../Header/Navigations/Navigations";

const SideBar = (props) => {
  const activeClass = props.show ? classes.active : null;

  return (
    <div className={classes.SideBar + " " + activeClass}>
      <Navigations navItems={props.navItems} />
    </div>
  );
};

export default SideBar;
