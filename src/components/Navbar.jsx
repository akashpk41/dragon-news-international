import { Link } from "react-router";
import { HiMenu } from "react-icons/hi";
import { FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const user = false;
  const userEmail = "pk@don.com";

  return (
    <div className="navbar bg-base-100 shadow-md mt-1 px-4">
      {/* Left Side - User Email */}
      <div className="flex-1 hidden md:flex items-center">
        {user && (
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <FaUserCircle className="text-xl text-[var(--color-accent)]" />
            {userEmail}
          </p>
        )}
      </div>

      {/* Center Links */}
      <div className="flex-1 flex justify-center gap-6">
        <Link to="/" className=" text-xl text-[var(--color-secondary)]">
          Home
        </Link>
        <Link to="/about" className="text-xl text-[var(--color-secondary)]">
          About
        </Link>
        <Link to="/career" className="text-xl text-[var(--color-secondary)]">
          Career
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              {/* Avatar */}
              <div className="avatar">
                <div className="w-10 rounded-full border-2 border-[var(--color-secondary)]">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="User Avatar" />
                  ) : (
                    <FaUserCircle className="w-10 h-10 text-[var(--color-accent)]" />
                  )}
                </div>
              </div>

              {/* Sign Out */}
              <button className="btn btn-sm flex items-center gap-2 bg-[var(--color-secondary)] text-white hover:bg-pink-700">
                <FiLogOut className="text-lg" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm flex items-center gap-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]"
              >
                <FiLogIn className="text-lg" />
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm flex items-center gap-2 bg-[var(--color-secondary)] text-white hover:bg-pink-700"
              >
                <FiUserPlus className="text-lg" />
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <HiMenu className="text-2xl" />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-80 ml-14 flex flex-col items-center gap-4"
          >
            {/* User Info */}
            {user ? (
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Avatar */}
                <div className="avatar">
                  <div className="w-24 rounded-full border-2 border-[var(--color-secondary)]">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="User Avatar" />
                    ) : (
                      <FaUserCircle className="w-24 h-24 text-[var(--color-accent)]" />
                    )}
                  </div>
                </div>

                {/* Email */}
                <p className="text-xl text-gray-600">{userEmail}</p>

                {/* Sign Out */}
                <button className="btn btn-lg w-full flex items-center gap-2 bg-[var(--color-secondary)] text-white hover:bg-pink-700">
                  <FiLogOut className="text-xl" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Login */}
                <Link
                  to="/login"
                  className="btn btn-lg w-full flex items-center gap-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]"
                >
                  <FiLogIn className="text-xl" />
                  Login
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  className="btn btn-lg w-full flex items-center gap-2 bg-[var(--color-secondary)] text-white hover:bg-pink-700"
                >
                  <FiUserPlus className="text-xl" />
                  Register
                </Link>
                <button className="btn text-lg  btn-secondary btn-outline w-full">
                  <FcGoogle size={24} /> Login with Google
                </button>

                {/* Apple */}
                <button className="btn w-full bg-black text-lg  text-white border-black">
                  <svg
                    aria-label="Apple logo"
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1195 1195"
                  >
                    <path
                      fill="white"
                      d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
                    ></path>
                  </svg>
                  Login with Apple
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
