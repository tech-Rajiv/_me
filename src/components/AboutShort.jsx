import React from "react";


function AboutShort() {
  return (
    <div id="aboutMe" className=" py-2 lg:py-1 mt-20 px-5 lg:px-1">
      <div className="headingABout ">
        <h1 className="text-xl font-bold">Who am I,</h1>
      </div>
      
      <div className="border border-gray-300 px-2 rounded-lg py-2 mt-4">
        <div className="flex justify-between items-center">
          <div>
            <i class="ri-graduation-cap-line text-teal-500"></i> <span className="text-teal-500 font-semibold">MCA</span>
            <i>
              <span className="ml-2 text-xs">ogoing</span>
            </i>
            <span className="hidden sm:block">Vidyadeep University, Surat</span>
          </div>
          <p>till 2026</p>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <i class="ri-graduation-cap-line text-teal-500"></i> <span className="text-teal-500 font-semibold" >BSC</span>
            <i>
              <span className="ml-2 text-xs">passed</span>
            </i>
            <span className="hidden sm:block">
              Veer Narmada South Gujarat University, Bharuch
            </span>
          </div>
          <p>march 2024</p> 
        </div>
      </div>
      {/*<p className="text-gray-300 mt-4">
        <strong>MCA student</strong>, I initially explored a different career path but later discovered my true passion for <strong>software development</strong> through self learning.
        I also continuously learn to expand my expertise toward
        other technologies as well.
      </p>*/}
      <p className="text-gray-300 mt-4">
      Hi, I'm Rajiv, a self-taught developer who transitioned from a different career to frontend development over the past year. With a solid foundation in JavaScript and React, my journey in tech is fueled by continuous learning
      </p>
    </div>
  );
}

export default AboutShort;
