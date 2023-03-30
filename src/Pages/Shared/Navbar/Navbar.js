import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.log(err));
}

    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-lg text-green-600">GTL-Playbook</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Support</a></li>
      {user?.uid?
        <li tabIndex={0}>
        <a>
          {user.displayName}
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><button onClick={handleLogOut}>Logout</button></li>
        </ul>
      </li>
      :
      <li><Link to="/login">Login</Link></li>
      }
    </ul>
  </div>
</div>
    );
};

export default Navbar;