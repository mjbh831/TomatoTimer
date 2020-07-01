import React, { useState } from "react";
import Splash from "./LoginPages/Splash";
import Login from "./LoginPages/Login";
import LoginInfo from "./LoginPages/LoginInfo";
import CreateAccount from "./LoginPages/CreateAccount";

export default function LoginBox(props) {
  const [currentLoginScreen, setCurrentLoginScreen] = useState("login");
  const preLoginButtonHandler = () => {
    setCurrentLoginScreen("login-info");
  };
  const newAccountButtonHandler = () => {
    setCurrentLoginScreen("create-account");
  };

  if (currentLoginScreen === "splash") {
    return <Splash />;
  }
  if (currentLoginScreen === "login") {
    return (
      <Login
        preLoginButtonHandler={preLoginButtonHandler}
        newAccountButtonHandler={newAccountButtonHandler}
      />
    );
  }
  if (currentLoginScreen === "login-info") {
    return (
      <LoginInfo
        loginButtonHandler={props.loginButtonHandler}
        newAccountButtonHandler={newAccountButtonHandler}
      />
    );
  }
  if (currentLoginScreen === "create-account") {
    return (
      <CreateAccount
        preLoginButtonHandler={preLoginButtonHandler}
        loginButtonHandler={props.loginButtonHandler}
      />
    );
  }

  return { currentLoginScreen };
}
