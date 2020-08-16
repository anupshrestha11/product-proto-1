import React from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./Navigations.module.scss";

const Navigations = (props) => {
  const navLinkList = () => {
    return props.navItems.map((navItem, index) => {
      return <Navigation key={index}>{navItem.name}</Navigation>;
    });
  };

  return <ul className="classes">{navLinkList()}</ul>;
};

export default Navigations;
