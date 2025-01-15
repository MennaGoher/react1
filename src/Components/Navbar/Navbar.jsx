import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="myNavBG py-3 position-fixed top-0 start-0 end-0 z-2">
        <div className="container">
          <ul className="list-unstyled d-flex justify-content-around align-items-center">
            <li>
              <Link
                className=" startClass text-decoration-none text-white fw-bold fs-2"
                to=""
              >
                START FRAMEWORK
              </Link>
            </li>
            <li>
              <NavLink
                className=" NavLink text-decoration-none text-white fw-medium fs-6"
                to="about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" NavLink text-decoration-none text-white fw-medium fs-6"
                to="portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" NavLink text-decoration-none text-white fw-medium fs-6"
                to="contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
