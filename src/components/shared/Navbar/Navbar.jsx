import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
const links=(
  <>
  <li><NavLink to={"/"} className={({isActive})=>isActive?"text-green-500 border-green-500 border-2":""}>Home</NavLink></li>
  <li><NavLink to={"/books"} className={({isActive})=>isActive?"text-green-500 border-2 border-green-500":""}>Listed Books</NavLink></li>
  <li><NavLink to={"/page-to-read"}className={({isActive})=>isActive?"text-green-500 border-2 border-green-500":""}>Page to Read</NavLink> </li>
  </>
)

    return (
        <div className='container mx-auto'> 
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        MENU
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
        
      </ul>

    </div>
    <a className="btn btn-ghost text-xl">BOOK VIBE</a>
  </div>

  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1">
{links}
    </ul>
  </div>

  <div className="navbar-end space-x-2">
    <a className="btn btn-info">Sign In</a>
    <a className="btn btn-accent">Sign Out</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;