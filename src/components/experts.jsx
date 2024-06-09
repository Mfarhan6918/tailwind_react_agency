import React from "react";
import laptopImg from "../assests/images/1 (1).png";

const Experts = () => {
  return (
    <div className="sm:py-16 py-12">
      <div className="max-w-[1240px] mx-auto p-3 md:grid grid-cols-2">
        <div className="col-span-1 w-[80%] flex justify-center items-center">
          <img src={laptopImg} alt="" className="w-3/4" />
        </div>
        <div className="col-span-1 flex justify-center flex-col">
          <h1 className="text-[#00df9a] font-bold mb-2 md:text-xl">
            LEARN FROM EXPERTS
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            architecto quod mollitia repellendus. Officiis dolore mollitia
            officia quis non quas nobis, et est ipsa illum distinctio deleniti,
            iusto quisquam placeat similique nesciunt voluptatum itaque quos?
          </p>
          <button className="font-bold w-[135px] bg-black text-white md:text-sm px-6 py-2 rounded-md hover:bg-[#3b3b3b] duration-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
