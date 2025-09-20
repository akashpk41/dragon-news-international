import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center mx-2 items-center py-3 flex-col">
      <img src={logo} alt="" />
      <p className="text-xl mt-3"> Journalism Without Fear And Fever </p>
    </div>
  );
};

export default Header;
