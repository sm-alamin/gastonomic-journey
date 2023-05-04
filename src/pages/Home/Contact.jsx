import React from "react";
import { FaEnvelope, FaPhone, FaSkyatlas, FaStaylinked } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-center items-center">
            <FaSkyatlas />
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mx-3">
              Contact Us
            </h2>
            <FaSkyatlas />
          </div>
          <div className="mx-auto">
            <p className="mt-2 text-lg text-gray-600 text-center">
              Send us your suggestion
            </p>
            <div className="flex justify-center items-center">
              <div>------------------------</div>
              <span className="mt-1 mx-3">
                <FaStaylinked />
              </span>
              <div>-------------------------</div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 pt-5">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <form className="bg-white rounded-lg overflow-hidden shadow-md p-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 relative pt-12">
              <img
                src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 lg:absolute lg:-top-6 lg:right-6">
                <h2 className="text-lg font-bold mb-4">
                  We will wait for your response
                </h2>
                <div className="flex flex-col md:flex-row items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaEnvelope className="text-white" />
                  </div>
                  <p className="text-gray-700">gastonomic.journey@gmail.com</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaPhone className="text-white" />
                  </div>
                  <p className="text-gray-700">+917428730894</p>
                </div>
                <div
                  className="text-white text-center p-2 font-bold bg-red-700 relative top-6 left-8 z-10
                        "
                >
                  Contact information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
