import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  console.log("user is", user);
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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          Gasto<span className="text-purple-400 mr-2">nomic </span>Jour
          <span className="text-purple-400">ney</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-5">
        <div className="dropdown dropdown-end">
          {user ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User avatar" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}/>
                ) : (
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1683087712~exp=1683088312~hmac=346cad2ba1b8d1055c6226246fdeb7b63b1c427c912cbf91e1bb8dab5089db6e"
                    alt=""
                  />
                )}
                {user.displayName ? (
                  <div className="tooltip" data-tip="hello">
                    <button className="btn">Hover me</button>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </label>
          ) : (
            <Link
              to="login"
              className="btn btn-ghost nav-link active text-white"
            >
              Login
            </Link>
          )}
        </div>
        <Tooltip style={{color: 'white', background: 'purple'}} id="my-tooltip" />
      </div>
    </div>
  );
};

export default NavigationBar;
