import React from "react";
import { LOGO } from "../utils/constants";
function Header() {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black ">
      <img src={LOGO} alt="Netflix Logo" className="w-44" />
    </div>
  );
}

export default Header;
