import React from "react";

const NavigationBar = () => {
  return (
    <div className="navbar bg-slate-100 text-black border rounded-full mt-3 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Gasto<span className="text-purple-400 mr-2">nomic </span>Jour
            <span className="text-purple-400">ney</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-green-400">Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200/300" />
        </div>
      </label>
    </div>
      </div>
    </div>
  );
};

export default NavigationBar;
