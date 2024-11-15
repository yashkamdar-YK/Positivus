import React, { useState } from "react";
import Logo from "/Vector.svg";
import Hamburger from "/Burger menu icon.svg";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative">
      <div className=" flex items-center justify-between">
        <div className="flex gap-3">
          <img src={Logo} alt=" logo" />
          <h2>Positivus</h2>
        </div>

        {/* Hamburger menu button */}
        <button
          className="lg:hidden w-8 h-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RxCross2 className="w-8 h-6" />
          ) : ( 
            <img src={Hamburger} className="w-8 h-6" alt="Open" />
          )}
        </button> 

        {/* Desktop menu - hidden on mobile */}
        <div className="hidden lg:flex lg:items-center text-[1.25rem] font-normal space-x-10">
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
          <button className="w-[14.438rem] h-[4.25rem] border-[1px] text-xl rounded-[0.875rem] border-[#191A23]">
            Request a quote
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
        lg:hidden 
        absolute 
        w-full 
        bg-white 
        shadow-lg 
        transition-all 
        duration-300 
        ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
      `}
      >
        <div className="flex flex-col items-center justify-center space-y-5 p-4">
          <a href="#home" className="hover:text-primary">
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
          <button className="w-full py-4 border-[1px] text-xl rounded-[0.875rem] border-[#191A23]">
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
