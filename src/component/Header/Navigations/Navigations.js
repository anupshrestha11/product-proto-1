import React from "react";
import Navigation from "./Navigation/Navigation";

const Navigations = (props) => {
  const navLinkList = () => {
    return props.navItems.map((navItem, index) => {
      return <Navigation key={index}>{navItem.name}</Navigation>;
    });
  };

  return <ul>{navLinkList()}</ul>;
};

export default Navigations;
