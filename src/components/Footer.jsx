import React from "react";
import Logo from "/whiteIcon.svg";
import linkedinIcon from "../assets/Icon/linkedIn.svg"
import facebookIcon from "../assets/Icon/Facebook.svg"
import x from "../assets/Icon/X.svg"
const Footer = () => {
  return (
    <footer className="relative bg-gray-800">
      <div className="bg-[#191A23] lg:rounded-tr-[2.813rem] lg:rounded-tl-[2.813rem] -mx-5 px-5"> 
        <div className="w-full bg-[#191A23] mt-[2.688rem] lg:mt-[6.688rem]">
          <div className="md:px-[3.75rem] py-[3.125rem] md:py-[3.438rem] text-white">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
              <div className="flex gap-3 justify-center md:justify-start">
                <img src={Logo} alt="" />
                <h3 className="text-white">Positivus</h3>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[2.5rem] text-center md:text-left text-lg">
                <a href="#home" className="hover:text-primary lg:underline">About us</a>
                <a href="#about" className="hover:text-primary lg:underline">Services</a>
                <a href="#services" className="hover:text-primary lg:underline">Use Cases</a>
                <a href="#contact" className="hover:text-primary lg:underline">Pricing</a>
                <a href="#contact" className="hover:text-primary lg:underline hidden md:block">Blog</a>
              </div>
              
              <div className="hidden md:flex justify-center md:justify-start space-x-5">
                <img src={linkedinIcon} alt="LinkedIn" />
                <img src={facebookIcon} alt="Facebook" />
                <img src={x} alt="X" />
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-[2.313rem] md:mt-[4.125rem] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              <div className="text-center md:text-left">
                <h4 className="bg-primary inline-block px-[0.438rem] rounded-[0.438rem]">
                  Contact us:
                </h4>
                <div className="mt-[1.688rem] space-y-5">
                  <p className="text-[#FFFFFF] font-normal">
                    Email: info@positivus.com
                  </p>
                  <p className="text-[#FFFFFF] font-normal">Phone: 555-567-8901</p>
                  <p className="text-[#FFFFFF] font-normal">
                    Address: 1234 Main St <br />
                    Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col items-center gap-4">
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-[0.625rem] bg-[#292A32] p-4 md:p-[3.625rem] rounded-[0.875rem]">
                  <input
                    className="w-full md:w-auto py-[1.375rem] px-[2.188rem] text-xl border border-white placeholder-white bg-transparent focus:outline-none focus:border-white rounded-[0.875rem]"
                    type="email"
                    placeholder="Email"
                  />
                  <button className="w-full md:w-auto py-5 px-[2.188rem] rounded-[0.875rem] text-secondary bg-primary">
                    <span className="text-xl font-normal">Subscribe to news</span>
                  </button>
                </div>
                
                <div className="flex md:hidden my-[1rem] justify-center space-x-5">
                  <img src="/public/Icon/linkedIn.svg" alt="" />
                  <img src="/public/Icon/Facebook.svg" alt="" />
                  <img src="/public/Icon/X.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-4 md:mt-[3rem]">
              <hr className="border-1" />
              <div className="mt-6 md:mt-[3rem] flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-10">
                <p className="text-white font-normal text-center md:text-left">
                  © 2023 Positivus. All Rights Reserved.
                </p>
                <p className="text-white underline font-normal">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
