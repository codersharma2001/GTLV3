import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import profilePicture from "../../Dashboard/Dashboard.js/Setting";

const Navbar = ({ profilePicture }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 border-b-1">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg text-green-600">
          <Link to="/">GTL-Playbook</Link>
        </a>
        Hi {user?.displayName} !
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>

          {user?.uid ? (
            <li tabIndex={0}>
              <a>
              {profilePicture && (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                {user.displayName}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>
                    <Link to="/about-us">About</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/support">Support</Link>
                  </a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
