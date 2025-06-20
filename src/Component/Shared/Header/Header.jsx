import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-base-100 md:max-w-5xl max-w-2xl mx-16 flex justify-around ">
      <div className="bg-white fixed top-0 left-0 right-0 z-30 ">
        <div className="navbar ">
          <div className="navbar-start mx-10">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>

                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/">what are peptides</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/">Blog</NavLink>
                </li>
              </ul>
            </div>

            <img className="" src="/src/assets/logo.png" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-7 text-[16px] font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/">what are peptides</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end mx-10 gap-6 wr">
            <img
              className="rounded-full border-2 p-3  w-12 h-12"
              src="/src/assets/cart.png"
              alt=""
            />
            <NavLink to="/signin">
              <img
                className="rounded-full border-2 p-3 w-12 h-12"
                src="/src/assets/humen.png"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
