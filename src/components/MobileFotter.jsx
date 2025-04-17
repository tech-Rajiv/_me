import React from "react";

function MobileFotter() {
  return (
    <section className=" text-white px-5 mt-20">
      <div className="headingTop ">
        <h1 className="text-lg font-semibold pagedown ">Contact Links !</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-5  md:justify-between  text-teal-500 text-xl">
        <a href="mailto:contact.rajivmishra@gmail.com" target="_blank" rel="noopener noreferrer" >
          <p className="links3  flex items-baseline">
            Gmail <i className="ri-arrow-right-up-line"></i>
          </p>
        </a>
        <a href="https://www.instagram.com/rajiv.007" target="_blank" rel="noopener noreferrer">
          <p className="links3 flex items-baseline">
            Instagram <i className="ri-arrow-right-up-line"></i>
          </p>
        </a>
        <a href="https://github.com/tech-Rajiv" target="_blank" rel="noopener noreferrer">
          <p className="links3 flex items-baseline">
            Github <i className="ri-arrow-right-up-line"></i>
          </p>{" "}
        </a>
        <a href="https://www.linkedin.com/in/rajiv-mishra-b56949337" target="_blank" rel="noopener noreferrer">
          <p className="links3 flex items-baseline" target="_blank" rel="noopener noreferrer">
            Linkedin <i className="ri-arrow-right-up-line"></i>
          </p>
        </a>
        <a href="">
          <p className="links3 flex items-baseline" target="_blank" rel="noopener noreferrer">
            X <i className="ri-arrow-right-up-line"></i>
          </p>{" "}
        </a>
      </div>
      <hr className="text-gray-400 mt-10" />
      <div className="footer py-10 pt-4 text-sm text-center ">
        © 2025 Rajiv. All rights reserved.
      </div>
    </section>
  );
}

export default MobileFotter;
