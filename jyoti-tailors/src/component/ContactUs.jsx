import React from "react";
import contactUsImag from "../assests/bg-4.jpg";
function ContactUs() {
  return (
    <div
      id="Contact"
      className="container max-w-6xl my-2 mx-auto bg-[--bg-color] p-4">
      <div className="container flex flex-wrap mx-auto justify-center item-center">
        <div className="basis-full md:basis-1/2 p-4 flex flex-col item-end justify-around">
          <img
            className="basis-4/5  mx-auto img-fluid"
            src={contactUsImag}
            alt="ContactUsImga"></img>
          <div className="block text-3xl  font-extrabold text-center  pt-4">
            Get An Appointment In Just a Click
          </div>
        </div>
        <div className="basis-full md:basis-1/2 p-4">
          <div className="text-2xl text-[--text-primary] font-bold mb-4">
            Contact Us
          </div>
          <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[--body-bg] ">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username">
                Full Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email">
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password">
                Message
              </label>
              <textarea
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter a Messsage for Us..."
                id="contact_us_message"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
