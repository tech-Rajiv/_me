import React from "react";
import { NavLink } from "react-router-dom";

function SingleProjects() {
  return (
    <div>
      <div className="backButtonSingleProjects">
        <NavLink
          to={"/"}
          className="text-lg text-gray-300 hover:text-gray-100 "
        >
          <i class="ri-arrow-left-line"></i> Back to Home
        </NavLink>
      </div> 
      


    </div>
  );
}

export default SingleProjects;
11