import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";




function Tabs() {
  let active = "text-gray-200 links scale-110 duration-100";
 

  return (
    <div className="wrapper px-5 bg-black/10 backdrop-blur-2xl shadow-md sticky top-0  text-white font-semibold flex justify-between text-sm py-5">
      <div
        
        className="flex text-gray-500 gap-5 lg:gap-10 items-center justify-center"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? active : "hover:text-gray-300 links"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/allprojects"}
          className={({ isActive }) =>
            isActive ? active : "hover:text-gray-300 links"
          }
        >
          Projects
        </NavLink>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-gray-300 cursor-pointer links"
        >
          Contact
        </Link>
      </div>

      <NavLink to={"/"} className="text-gray-500 hover:text-gray-300 links">
        youtube..
      </NavLink>
    </div>
  );
}

export default Tabs;
