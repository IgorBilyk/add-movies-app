import React from "react";
import { FaUserAlt } from "react-icons/fa";

import classes from "./Login.module.css";

function Login(props) {
  return (
    <div className={classes.container}>
      <FaUserAlt />
    </div>
  );
}

export default Login;
