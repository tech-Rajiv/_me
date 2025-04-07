import React from "react";
import { NavLink} from "react-router-dom";

import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";
function About() {
  return (
    <div id="aboutMe" className="max-w-2xl">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Briefcase className="mr-2 text-teal-500" /> About Me
      </h2>
      <p className="mb-4 text-gray-300">
        "I am a{" "}
        <span className="font-semibold text-white">
          Master of Computer Applications{" "}
        </span>
        (MCA) student, set to graduate in Next Year 2026. I hold a{" "}
        <span className="font-semibold text-white"> BSc in Electronics</span>{" "}
        but later i discovered a strong passion for{" "}
        <span className="font-semibold text-white"> software development</span>,
        which led me to pursue an MCA "
      </p>
      <div className="text-end mt-2">
        SURAT <i className="ri-map-pin-2-line text-teal-500  "></i>
      </div>
      <div className="text-end mt-2">
        999rajivmishra@gmail.com <i className="ri-mail-line text-teal-500 "></i>
      </div>

      <h2 className="text-xl font-semibold mb-2 flex items-center mt-5">
        <GraduationCap className="mr-2 text-teal-500" />
        Education
      </h2>
      <div className="bg-gray-900 p-4 rounded-lg shadow-md">
        <p>
          <strong className="text-teal-500">MCA</strong> - Vidyadeep University
        </p>
        <p>Year: [2024 -2026]</p>
        <p className="mt-5">
          <strong className="text-teal-500">BSC</strong> - VNSGU
        </p>
        <p>Year: [2020 -2023]</p>
      </div>

      <div className="mt-10 hidden lg:flex justify-center">
        "My journey into tech wasn’t conventional. Comming from a different
        field, though through self learn i created various projects that shows
        my skills"
      </div>

      <NavLink to={"/"} className="text-teal-500 mt-2 hidden lg:flex justify-end text-end">view projects<i className="ri-arrow-right-down-long-line"></i></NavLink>
    </div>
  );
}

export default About;
