import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2696fb] w-full py-[58px]">
      <div className="max-w-[1200px] mx-auto my-[81.5px] text-center font-bold">
        <div className="sm:text-4xl text-2xl sm:mb-6">Learn with us</div>
        <h2 className="sm:text-6xl text-4xl text-white sm:mb-6">
          Grow with us
        </h2>
        <div className="sm:text-5xl text-2xl text-white sm:mb-6 mb-2">
          Learn 
          <ReactTyped className="pl-3"
            strings={["Web Development", "Graphics Designing", "Video Editing"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></ReactTyped>
        </div>
        <button className="bg-black text-white md:text-sm px-6 py-2 rounded-md hover:bg-[#3b3b3b] duration-700">Learn More</button>
      </div>
    </div>
  );
};
export default Banner;
