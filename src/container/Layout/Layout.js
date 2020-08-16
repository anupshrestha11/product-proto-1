import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import SideBar from "../../component/SideBar/SideBar";
import Home from "../Home/Home";

const Layout = () => {
  const [navItems, setNavitems] = useState([]);

  const [showSideBar, isShowSidebar] = useState(false);

  useEffect(() => {
    setNavitems([
      {
        name: "Login",
      },
      {
        name: "Register",
      },
      {
        name: "Contact Us",
      },
    ]);
  }, []);

  const showSideBarHandler = () => {
    isShowSidebar(!showSideBar);
  };
  const hideSideBarHandler = () => {
    isShowSidebar(false);
  };

  return (
    <div>
      <Header
        navItems={navItems}
        showSidebarHandler={showSideBarHandler}
        showSideBar={showSideBar}
      />
      <SideBar navItems={navItems} show={showSideBar} />
      <Home />
    </div>
  );
};

export default Layout;
