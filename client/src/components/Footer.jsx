import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32 rounded" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-pink-200 text-base hover:underline hover:text-green-300 text-center mx-2 cursor-pointer">Market</p>
        <p className="text-pink-200 text-base hover:underline hover:text-green-300 text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-pink-200 text-base hover:underline hover:text-green-300 text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-pink-200 text-base hover:underline hover:text-green-300 text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-pink-200 text-sm text-center">Come join us and we would gladly be of optimum quality service.</p>
      <p className="text-pink-200 text-sm text-center font-medium mt-2">info@timcryptex.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-pink-200 text-left text-xs">@timcryptex2022</p>
      <p className="text-pink-200 text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
