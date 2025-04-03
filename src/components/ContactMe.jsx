import React, { useState } from "react";

export default function ContactMe() {
  const [msg, setMsg] = useState();
  const [msgSent, setMsgSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
const [errors, setErrors] = useState(false)
  const handelSent = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || userMsg.trim() === "") {
      setErrors(true)
      return;
    }

    setMsgSent(true);
    const newMsg = {
      name: name,
      email: email,
      msg: userMsg,
    };
    setMsg(newMsg);
    console.log(newMsg);
  };
  return (
    <section id="contact" className="px-5 mt-20">
      <div className=" mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-100 ">Contact Me</h2>

        {!msgSent ? (
          <form className=" shadow-lg rounded-2xl  max-w-lg mx-auto mt-2">
            <div className="mb-4">
              <label className="block text-left text-gray-200 text-base mb-2">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full border-gray-300 border p-3 rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left text-gray-200 text-base mb-2">
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border-gray-300 border p-3 rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="">
              <label className="block text-left text-gray-200 text-base mb-2">
                Message
              </label>
              <textarea
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                rows="4"
                className="w-full border-gray-300 border p-3 rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
                { errors ? <div className="tect-sm "><i class="ri-error-warning-line text-red-500"></i> All fields are required!</div>: <></>}
            <button
              onClick={handelSent}
              type="submit"
              className="w-full mt-4 bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-400"
            >
              Send Message <i class="ri-send-plane-line"></i>
            </button>
          </form>
        ) : (
          <div className="px-5 border border-gray-300  mt-5 rounded-lg text-lg py-3">
            <div>
              {" "}
              <h3 className="text-lg   ">
                <i class="ri-verified-badge-fill text-green-400"></i> Thank you
                for reaching out!
              </h3>
              <p className="text-gray-300 text-sm">
                I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
