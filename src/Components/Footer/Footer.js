import React from "react";
import paymentMethods from "../../../public/assets/paymentMethods.png";

const Footer = () => {
  return (
    <div className="w-full bg-black px-10 sm:px-20 py-8 pb-10 flex flex-col gap-4">
      <div className="top_ctr flex items-start justify-between w-full h-auto py-6 flex-wrap md:flex-nowrap">
        <div className="left_ctr mb-6 sm:mb-0 w-full sm:w-3/12 flex flex-col gap-3">
          <div className="main_heading font-bold text-white text-lg">
            Zamaana
          </div>
          <div className="short_desc text-white/75 text-sm">
            Modern Day Clothing, that feels old school. Experience the fusion of
            modern style with timeless charm.
          </div>
          <div className="social_icons flex items-center justify-between gap-3 w-3/12 text-white/75">
            <div className="cursor-pointer hover:scale-[1.1] duration-200 ease-in-out bi bi-instagram"></div>
            <div className="cursor-pointer hover:scale-[1.1] duration-200 ease-in-out bi bi-facebook"></div>
            <div className="cursor-pointer hover:scale-[1.1] duration-200 ease-in-out bi bi-twitter"></div>
            <div className="cursor-pointer hover:scale-[1.1] duration-200 ease-in-out bi bi-pinterest"></div>
          </div>
        </div>
        <div className="w-2/12 hidden sm:block"></div>
        <div className="mid_ctr w-4/12 sm:w-3/12 flex flex-col gap-2">
          <div className="font-bold text-white text-lg">Quick Links</div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Categories
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Trending
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Apparel Finder
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Best Seller
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            About Us
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Blogs
          </div>
        </div>
        <div className="w-1/12 hidden sm:block"></div>
        <div className="right_ctr w-3/12 flex flex-col gap-2">
          <div className="font-bold text-white text-lg">Categories</div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Oversized
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            T-Shirts
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Shirts
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Hoodies
          </div>
          <div className="cursor-pointer w-fit text-white/75 text-sm">
            Combos
          </div>
        </div>
        <div className="w-1/12"></div>
        <div className="left_ctr sm:w-full mt-6 md:mt-0 md:w-3/12 flex flex-col gap-3">
          <div className="main_heading font-bold text-white text-lg">
            Stay Updated
          </div>
          <div className="short_desc text-white/75 text-sm">
            Subscribe to our newsletter for gift ideas and exclusive offers.
          </div>
          <div className="flex flex-col gap-3">
            <input
              placeholder="Your email address"
              className="w-full text-sm px-6 py-3 rounded-md bg-[#111827] text-white placeholder:text-white"
            ></input>
            <button className="w-full text-sm px-6 py-3 rounded-md bg-white/90 text-[#1F2937]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="middle_ctr py-4 border-white/10 h-auto border-t-[1px] border-b-[1px] flex items-center justify-between pr-4 sm:pr-0">
        <div className="left_ctr w-fit flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
          <div className="text-white/75 text-sm">Payment Methods: </div>
          <div className="flex items-center justify-center ml-2 gap-3 text-white/75">
            <span className="bi bi-credit-card"></span>
            <span className="bi bi-credit-card-2-front-fill"></span>
            <span className="bi bi-wallet-fill cursor-pointer"></span>
          </div>
        </div>
        <div className="right_ctr w-fit flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <div className="text-white/75 text-sm">Shipping Partners: </div>
          <div className="w-fit flex items-center justify-center gap-3 text-white/75 text-lg">
            <div className="bi bi-truck cursor-pointer"></div>
            <div className="bi bi-box-fill cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="bottom_ctr py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <div className="left_ctr w-full sm:w-3/12 flex items-center justify-center sm:justify-between">
          <div className="text-white/75 text-sm bi bi-c-circle">
            {" "}
            2024 GiftLab. All rights reserved.{" "}
          </div>
        </div>
        <div className="right_ctr w-full sm:w-fit flex items-center justify-between sm:justify-center sm:gap-5">
          <div className="text-white/75 text-sm">Privacy Policy</div>
          <div className="text-white/75 text-sm">Terms of Service</div>
          <div className="text-white/75 text-sm">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
