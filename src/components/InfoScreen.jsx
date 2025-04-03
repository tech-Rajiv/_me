import React from "react";

function InfoScreen() {
  return (
    <div className="w-full">
      <div className=" p-5  rounded-xl  bg-gray-950 shadow-2xs">
        <div className="logoInfo flex gap-5 items-center">
          <div className="img max-w-20 max-h-20 rounded-xl overflow-hidden object-cover">
            <img
              className="w-full h-full"
              src="./src/assets/images/aavatar.png"
              alt=""
            />
          </div>
          <div className="info">
            <div className="text-xs flex gap-2  items-center ">
              <div className="bg-green-400 w-2 h-2 rounded-full text-gray-200"></div>
              Available To Work
            </div>
            <div className="text-2xl text-teal-500 font-bold ">
              Rajiv Mishra
            </div>
            <div className="flex">here👋</div>
          </div>
        </div>
        {/*<div className="text-umd mt-1  md:mt-2 text-gray-200">
        A <span className="font-semibold text-white">Frontend Developer</span> and a <span className="text-white font-semibold">MCA Student</span>, building user-friendly web applications. Based in Surat, Gujarat.<i class="ri-map-pin-2-line"></i>
        </div> */}
        <div className="flex gap-2 flex-wrap mt-2">
          <div>Frontend Developer</div>|<div>Master's Student</div>|
          <div>
            Surat <i class="ri-map-pin-2-line text-sm"></i>
          </div>
        </div>

        <div className="flex  gap-2 mt-5 justify-between items-end">
          <div className="flex w-full gap-2 md:gap-4">
            <button className="bg-teal-700 hover:bg-teal-600 py-2 w-full md:max-w-44  rounded-md text-white font-semibold">
              Contact me <i class="ri-chat-3-line text-lg font-medium "></i>
            </button>
            <button className="shadow-2xl border w-full md:max-w-44 py-2 hover:bg-[#222831]  rounded-md text-white font-semibold">
              Resume
              <span>
                <i class="ri-file-download-line ml-2 font-medium"></i>
              </span>
            </button>
          </div>

          <div>
            <a
              href="#aboutMe"
              className="hidden text-gray-300 hover:text-gray-100 sm:flex "
            >
              readmore..<i class="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 mt-3 rounded-2xl shadow-2xl  p-5">
        <div className="flex text-2xl justify-between gap-5 px-5 items-center text-teal-600 ">
          <p className="text-sm hidden sm:block text-white">Socials :</p>
          <div>
            <i class="ri-mail-line hover:text-teal-400"></i>
          </div>
          <div>
            <i class="ri-instagram-line hover:text-teal-400"></i>
          </div>
          <div>
            <i class="ri-linkedin-fill hover:text-teal-400"></i>
          </div>
          <div>
            <i class="ri-github-line hover:text-teal-400"></i>
          </div>

          <div>
            <i class="ri-twitter-line hover:text-teal-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
