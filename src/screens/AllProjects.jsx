import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import project1 from '../assets/images/project1.jpg';

function AllProjects() {
    const location = useLocation()
    const backUrl = location.state?.fromUrl
    console.log(backUrl)
  return (
    <div className="projcts mt-5 px-5">
     
      <div className="backButtonSingleProjects">
        <NavLink
          to={"/"}
          className="text-base text-gray-300 hover:text-gray-100 "
        >
          <i className="ri-arrow-left-line"></i> Back to Home
        </NavLink>
      </div>
      {/*<div className="firstPoject mt-10">
              <div className="first flex  flex-col sm:flex-row mt-5 gap-5 items-center">
                <div className="projectImg max-h-60 sm:max-h-40 w-full sm:max-w-56  bg-white rounded-2xl overflow-hidden ">
                  <img
                    className="w-full h-full"
                    src={project1}
                    alt=""
                  />
                </div>
                <div className="Info ">
            <h1 className="text-teal-500 font-bold text-xl flex items-baseline">
              <span>
                <i className="ri-arrow-right-double-line font-normal"></i>
              </span>{" "}
              BILL.ez{" "}
              <span className="font-light ml-2 text-base text-gray-100">
                - personal project
              </span>
            </h1>
            <p className="text-gray-400 text-base lg:text-md ">
              A Web Solution to the Billing problems i faced while running my
              <strong> local shop</strong>.
            </p>

            <div className="flex flex-wrap  gap-2  text-lg items-center mt-2 ">
              <div className="px-2 bg-black border rounded hover:translate-y-[-2px] hover:transform transition duration-300">
                <i className="ri-javascript-line text-teal-500"></i> Javascript
              </div>
              <div className="px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
                <i className="ri-tailwind-css-fill text-teal-500"></i> Tailwind
              </div>
              <div className="px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
                <i className="ri-database-2-line text-teal-500"></i> Firebase
                DataBase n Auth
              </div>
            </div>
          </div>
              </div>
              <div className="links mt-4 text-base text-teal-500   flex justify-between items-center">
                <div className="flex gap-5  items-center">
                  <a href="" className="hover:text-teal-300">
                    <i className="ri-global-line"></i>Live Visit
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a href="" className="hover:text-teal-300">
                    <i className="ri-github-fill"></i> Git-hub
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <NavLink to={"/singleproject"}>
                  <span className="text-teal-500 hover:text-teal-400">
                    readmore...<i className="ri-arrow-right-down-long-line"></i>
                  </span>
                </NavLink>
              </div>
             
            </div> */}
            <hr className="text-gray-400 mt-5"/>

    </div>
  );
}

export default AllProjects;
