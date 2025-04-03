import React from 'react'

function MobileFotter() {
  return (
    <section className=" text-white px-5 mt-20">
    <div class="headingTop ">
      <h1 className="text-lg font-semibold pagedown ">Important Links !</h1>

    </div>
    
    
    <div className="flex flex-col md:flex-row gap-4 mt-5  md:justify-between  text-teal-500 text-xl">

      <a href="mailto:999rajivmishra@gmail.com">
        <p className="links3  flex items-baseline">Gmail <i class="ri-arrow-right-up-line"></i></p></a>

      

      <a href="https://www.instagram.com/rajiv.007">
        <p className="links3 flex items-baseline">Instagram <i class="ri-arrow-right-up-line"></i></p></a>
      <a href="https://github.com/tech-Rajiv">
        <p className="links3 flex items-baseline">Github <i class="ri-arrow-right-up-line"></i></p> </a>
      <a href="">
        <p className="links3 flex items-baseline">Linkedin <i class="ri-arrow-right-up-line"></i></p></a>
      <a href="">
        <p className="links3 flex items-baseline">X <i class="ri-arrow-right-up-line"></i></p> </a>
    </div>
    <hr className='text-gray-400 mt-10' />
    <div className="footer py-10 pt-4 text-sm text-center ">
      © 2025 Rajiv. All rights reserved.
    </div>



  </section>
  )
}

export default MobileFotter