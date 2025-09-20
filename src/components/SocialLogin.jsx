import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-lg font-bold  mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary text-xl btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="btn btn-outline text-xl btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;