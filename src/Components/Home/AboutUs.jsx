import React from "react";
import { MdHomeRepairService } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-[15vh]">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0">
          <div className="space-y-4 ">
            <div className="w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold">Services</h1>
              <p className="text-xs">
                Douro Valley Full-Day Wine & Scenic Tour - get to know the
                beautiful Douro Valley as you join a very private tour
                throughout this beautiful place.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold">Services</h1>
              <p className="text-xs">
                Private scenic cruise - see the highlights of Porto and Gaia
                from the river as you savor local products.
              </p>
            </div>
          </div>
        </div>

        <div className="w-11/12 md:w-1/2 space-y-5 ">
          <h1 className="text-6xl font-bold">
            Learn <span className="text-[#FF9874]">About Us</span>
          </h1>
          <p className="text-sm text-gray-400">
            Founded in 2015, our company was born from a passion for hospitality
            and a desire to create unforgettable stays and experiences. As Porto
            natives, we take pride in showcasing the best our city and region
            have to offer. While our core operations are in Porto, we also
            extend our services to the stunning Douro Valley. More than just
            accommodations, we are passionate about people, new cultures, and
            authentic experiences. That's why, in addition to providing
            exceptional stays, we also offer boat tours and guided experiences
            through the breathtaking landscapes of the Douro Valley. Join us and
            discover Portugal through the eyes of those who call it home!
          </p>
        </div>
      </div>

      <div className="w-11/12 md:w-1/2 my-[13vh] mx-auto">
        <h2 className="text-5xl font-bold text-center">
          Get in touch!
        </h2>
        <p className="text-2 font-bold mt-2 mb-7 text-center text-gray-700">
          We will get back to you as fast as possible.
        </p>
        <form className="space-y-4">
          <div className="flex justify-between">
            <div className="w-[49%]">
              <label className="block text-sm font-medium text-gray-700 indent-1">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[5px] shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div className="w-[49%]">
              <label className="block text-sm font-medium text-gray-700 indent-1">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[5px] shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none"
                placeholder="Your phone"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 indent-1">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-[5px] shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 indent-1">
              Message
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-[5px] shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none"
              rows="4"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="grid justify-center">
            <button
              type="submit"
              className="bg-[#FF9874] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
