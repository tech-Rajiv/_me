import React from "react";


function Technologies() {

  return (
    <div className="mt-20 ">
      <h1 className=" text-lg font-semibold ml-2">Current Technologies</h1>
      <div className="text-gray-300 px-5 bg-gray-950 rounded-2xl pt-5 pb-7 mt-3">
        <div className="subheading">
          Im proificent in a range of modern technologies that helps me to build
          highly functional solutions
        </div>
        <div
    
          className="  logosWrapper flex flex-wrap justify-items-stretch gap-3 text-lg mt-5"
        >
          <div className="box px-2 bg-black border rounded hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-javascript-line text-teal-500"></i> Javascript
          </div>
          <div className="box px-2 bg-black border border-gray-300 rounded hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-reactjs-line text-teal-500"></i> ReactJs
          </div>
          <div className="box px-2 bg-black border border-gray-300 rounded hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-exchange-2-fill text-teal-500"></i> REST API Integration
          </div>
          <div className="box px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-tailwind-css-fill text-teal-500"></i> GSAP
            animations
          </div>
          <div className="box px-2 bg-black border border-gray-300  rounded  hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-tailwind-css-fill text-teal-500"></i> Tailwind & shadcn UI
          </div>

          <div className="box px-2 bg-black border border-gray-300  rounded hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-database-2-line text-teal-500"></i> Firebase (Realtime Database)
          </div>
          <div className="box px-2 bg-black border border-gray-300  rounded hover:translate-y-[-2px] hover:transform transition duration-300">
            <i className="ri-github-line text-teal-500"></i> Git & GitHub
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
