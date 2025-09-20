import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";
import QZone from "../Qzone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <QZone></QZone>
      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;