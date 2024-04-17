import React from "react";
import LoginInput from "./LoginInput";
import Signup from "./Signup";
import "../Css/login.css";

function Login() {
  return (
    <div className="login">
      <LoginInput />
      <div className="separator"></div>
      <Signup />
    </div>
  );
}

export default Login;
