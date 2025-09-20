import React from "react";
import logo from "../assets/logo.png";
import LiveDateTime from "./LiveDateTime";
import LatestNews from "./LatestNews";

const Header = () => {
  return (
    <div className="flex justify-center mx-2 items-center py-3 flex-col">
      <img src={logo} alt="" />
      <p className="text-xl mt-3 text-accent">
        {" "}
        Journalism Without Fear And Fever{" "}
      </p>
      <LiveDateTime />
      <LatestNews/>
    </div>
  );
};

export default Header;
