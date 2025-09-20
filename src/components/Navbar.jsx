import { Link } from "react-router";
import { HiMenu } from "react-icons/hi";
import { FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

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
        <Link to="/" className="text-[var(--color-secondary)]">
          Home
        </Link>
        <Link to="/about" className="text-[var(--color-secondary)]">
          About
        </Link>
        <Link to="/career" className="text-[var(--color-secondary)]">
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
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
