import React from "react";
import PropTypes from "prop-types";
import Navigations from "./Navigations/Navigations";
import Logo from "../Logo/Logo";
import classes from "./Header.module.scss";
import Menu from "../Menu/Menu";
const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div>
        <Logo />
      </div>
      <div className={classes.Burger}>
        <Menu clicked={props.showSidebarHandler} cross={props.showSideBar} />
      </div>
      <nav>
        <Navigations navItems={props.navItems} />
      </nav>
    </header>
  );
};

Header.propTypes = {
  navItems: PropTypes.any.isRequired,
};

export default Header;
