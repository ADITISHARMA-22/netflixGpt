import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
function Login() {
  return (
    <div>
      <Header />
      <img src={BG_URL} alt="background image" />
    </div>
  );
}

export default Login;
