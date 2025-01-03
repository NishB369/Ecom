import React from "react";
import videoSrc from "../../../public/assets/video.mp4";

const HeroSection = () => {
  return (
    <div className="py-20 my-10 flex items-center justify-center flex-col gap-8 px-10 relative bg-black">
      <div className="text_ctr flex items-center justify-center flex-col text-center z-10">
        <div className="heading_ctr text-white  text-4xl sm:text-5xl sm:w-[75%] font-semibold leading-tight">
          Clothing, That Express
        </div>
        <div className="subheading_ctr text-md sm:text-lg mt-4 sm:w-[70%] text-blue-400">
        Modern Day Clothing, that feels old school. Experience the fusion of
        modern style with timeless charm.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10">
        <div className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
          Explore Collections
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </div>
        <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
          Apparel Finder
          <span className="bi bi-search ml-2 flex items-center justify-center"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
