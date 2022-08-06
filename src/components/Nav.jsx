import React from "react";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link capitalize">
          <a href="##">Home</a>
        </li>
        <li className="nav-link capitalize">
          <a href="##">Company</a>
        </li>
        <li className="nav-link capitalize">
          <a href="##">Features</a>
        </li>
        <li>
          <a className="btn" href="##">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
