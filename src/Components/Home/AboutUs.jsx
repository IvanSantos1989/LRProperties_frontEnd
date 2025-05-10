import React from "react";
import { MdHomeRepairService } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="container mx-auto m-[15vh]">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0">
          <div className="space-y-4 ">
            <div className="w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold">Service</h1>
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
              <h1 className="text-xl font-bold">Service</h1>
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

    </div>
  );
};

export default AboutUs;
