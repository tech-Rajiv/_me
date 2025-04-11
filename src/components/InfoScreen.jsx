import React from "react";
import avatar from "../assets/images/aavatar.webp";
import { Link } from "react-scroll";



function InfoScreen() {

  return (
    <div className="w-full ">
      <div   className=" p-5  rounded-xl  bg-gray-950 shadow-2xs">
        <div className="info logoInfo flex gap-5 items-center">
          <div className="img max-w-20 max-h-20 rounded-xl overflow-hidden object-cover">
            <img className="w-full h-full" src={avatar} alt="" />
          </div>
          <div className="information">
            <div className="text-xs flex gap-1  items-center ">
              <div className="bg-green-400 w-2 h-2 rounded-full text-gray-200"></div>
             Online
            </div>
            <div className="text-2xl text-teal-500 font-bold ">
              Rajiv Mishra
            </div>
            <div className="flex">here👋</div>
          </div>
        </div>
        {/*<div className="text-umd mt-1  md:mt-2 text-gray-200">
        A <span className="font-semibold text-white">Frontend Developer</span> and a <span className="text-white font-semibold">MCA Student</span>, building user-friendly web applications. Based in Surat, Gujarat.<i className="ri-map-pin-2-line"></i>
        </div> */}
        <div className=" info flex gap-2 flex-wrap mt-2">
          <div>Frontend Developer</div>|<div>Master's Student</div>|
          <div>
            Surat <i className="ri-map-pin-2-line text-sm"></i>
          </div>
        </div>

        <div className="flex info gap-2 mt-5 justify-between items-end">
          <div className="flex w-full gap-2 md:gap-4">
            <a
              href="mailto:999rajivmishra@gmail.com"
              className="bg-teal-700 hover:bg-teal-600 py-2 text-center w-full md:max-w-44  rounded-md text-white font-semibold"
            >
              Contact me <i className="ri-chat-3-line text-lg font-medium "></i>
            </a>
            <button className="shadow-2xl border w-full md:max-w-44 py-2 hover:bg-[#222831]  rounded-md text-white font-semibold">
              Resume
              <span>
                <i className="ri-file-download-line ml-2 font-medium"></i>
              </span>
            </button>
          </div>

          <div>
          
            <Link
              to="aboutMe"
              smooth={true}
              duration={500}
              className="hidden text-gray-300 hover:text-gray-100 sm:flex "
            >
              readmore..<i className="ri-arrow-down-line"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 mt-3 rounded-2xl shadow-2xl  p-5">
        <div  className="flex text-2xl justify-between gap-5 px-5 items-center text-teal-600 ">
          <p className="text-sm hidden sm:block text-white">Socials :</p>
          <div>
            <a href="mailto:999rajivmishra@gmail.com">
            <i className="logo ri-mail-line hover:text-teal-400"></i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/rajiv.007" target="_blank" rel="noopener noreferrer">
            <i className="logo ri-instagram-line hover:text-teal-400"></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/rajiv-mishra-b56949337" target="_blank" rel="noopener noreferrer" >
            <i className="logo ri-linkedin-fill hover:text-teal-400"></i></a>
          </div>

          <div>
            <a href="https://github.com/tech-Rajiv" target="_blank" rel="noopener noreferrer">
            <i className="logo ri-github-line hover:text-teal-400"></i></a>
          </div>

          <div>
            <a href="https://x.com/rajiv_mishraa" target="_blank" rel="noopener noreferrer">
            <i className="logo ri-twitter-line hover:text-teal-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
