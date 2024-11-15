import React from "react";
import Logo from "/whiteIcon.svg";
const Footer = () => {
  return (
    <div>
      <div className="w-full px-[3.75rem] text-white py-[3.438rem] h-[32.125rem] bg-[#191A23] rounded-tr-[2.813rem] rounded-tl-[2.813rem] mt-[6.688rem]">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <img src={Logo} className="" alt="" />
            <h3 className="text-white">Positivus</h3>
          </div>
          <div className="space-x-[2.5rem] underline text-lg">
            <a href="#home " className="hover:text-primary">
              About us
            </a>
            <a href="#about" className="hover:text-primary">
              Services
            </a>
            <a href="#services" className="hover:text-primary">
              Use Cases
            </a>
            <a href="#contact" className="hover:text-primary">
              Pricing
            </a>
            <a href="#contact" className="hover:text-primary">
              Blog
            </a>
          </div>
          <div className="space-x-5 flex">
            <img src="/public/Icon/X.svg" alt="" srcset="" />
            <img src="/public/Icon/Facebook.svg" alt="" srcset="" />
            <img src="/public/Icon/X.svg" alt="" srcset="" />
          </div>
        </div>
        {/* Contect */}
        <div className="mt-[4.125rem] flex-wrap flex justify-between items-center">
          <div>
            <h4 className="bg-primary inline px-[0.438rem] rounded-[0.438rem]">
              Contact us:
            </h4>
            <div className="mt-[1.688rem] space-y-5">
              <p className="text-[#FFFFFF] font-normal">
                Email: info@positivus.com
              </p>
              <p className="text-[#FFFFFF] font-normal ">Phone: 555-567-8901</p>
              <p className="text-[#FFFFFF] font-normal">
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <div className="gap-[0.625rem] flex flex-wrap px-10 bg-[#292A32] py-[3.625rem] rounded-[0.875rem]">
            <input
              className="py-[1.375rem] px-[2.188rem] text-xl border border-white placeholder-white bg-transparent  focus:outline-none focus:border-white rounded-[0.875rem] "
              type="email"
              placeholder="Email"
            />
            <button className="py-5 px-[2.188rem] rounded-[0.875rem] text-secondary bg-primary">
              <span className="text-xl font-normal"> Subscribe to news</span>
            </button>
          </div>
          {/* bottom */}
          <div className="mt-[3.125rem]">
            <hr className="border-1" />
            <div className=" mt-[3rem] flex space-x-10">
              <p className="text-white font-normal">
                © 2023 Positivus. All Rights Reserved.
              </p>
              <p className="text-white underline font-normal">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
