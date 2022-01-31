import React from "react";

import classes from "./Header.module.css";
import Login from "./login/Login";

function Header(props) {
  return (
    <div className={classes.header}>
      <Login></Login>
    </div>
  );
}

export default Header;
