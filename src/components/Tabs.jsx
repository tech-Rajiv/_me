import React from "react";
import { Link, NavLink } from "react-router-dom";

function Tabs() {
  let active = "text-gray-200 scale-110 duration-100";

  return (
    <div className="wrapper px-5 bg-black/40 backdrop-blur-lg shadow-md sticky top-0  text-white font-semibold flex justify-between text-sm py-5">
      <div className="flex text-gray-500 gap-5 lg:gap-10 items-center justify-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? active
              : "hover:text-gray-300 "
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/allprojects"}
          className={({ isActive }) =>
            isActive
              ? active
              : "hover:text-gray-300 "
          }
        >
          Projects
        </NavLink>
 
      <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>

      <NavLink to={"/"} className="text-gray-500 hover:text-gray-300">
          youtube..
      </NavLink>
    </div>
  );
}

export default Tabs;
