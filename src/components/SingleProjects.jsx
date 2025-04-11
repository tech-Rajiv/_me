import React from "react";
import { NavLink } from "react-router-dom";

function SingleProjects() {
  return (
    <div>
      <div className="first flex  flex-col sm:flex-row mt-5 gap-5 items-center">
        <div className="projectImg shadow-2xl bg-gray-900 max-h-60 sm:max-h-40 w-full sm:max-w-56 rounded-2xl overflow-hidden ">
          <img className="w-full h-full rounded-2xl"  alt="" />
        </div>
        <div className="Info ">
          <h1 className="text-teal-500 font-bold text-xl flex items-baseline">
            <span>
              <i className="ri-arrow-right-double-line font-normal"></i>
            </span>{" "}
            GameHub{" "}
            <span className="font-light ml-2 text-base text-gray-100">
              - Client-Side Games
            </span>
          </h1>
          <p className="text-gray-400 text-base lg:text-md ">
            cloned Popular gamblimg game
            <strong> Mines, avator, fortune of apples</strong> and more.
          </p>

          <div className="flex flex-wrap  gap-2  text-lg items-center mt-2 ">
            <div className="px-2 bg-black border rounded hover:translate-y-[-2px] hover:transform transition duration-300">
              <i className="ri-javascript-line text-teal-500"></i> Javascript
            </div>
            <div className="px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
              <i className="ri-reactjs-line text-teal-500"></i> React js
            </div>
            <div className="px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
              <i className="ri-tailwind-css-fill text-teal-500"></i> Tailwind
            </div>
            <div className="px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
              <i className="ri-database-2-line text-teal-500"></i> Local Storage
            </div>
          </div>
        </div>
      </div>
      <div className="links mt-4 text-base text-teal-500   flex justify-between items-center">
        <div className="flex gap-5  items-center">
          <a
            href="https://tech-rajiv.github.io/gamehub/"
            className="hover:text-teal-300"
          >
            <i className="ri-global-line"></i>Live Visit
            <i className="ri-arrow-right-up-line"></i>
          </a>
          <a
            href="https://github.com/tech-Rajiv/gamehub"
            className="hover:text-teal-300"
          >
            <i className="ri-github-fill"></i> Git-hub
            <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
        <NavLink to={"/"}>
          <span className="text-teal-500 hover:text-teal-400">
            readmore...<i className="ri-arrow-right-down-long-line"></i>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SingleProjects;
11;
