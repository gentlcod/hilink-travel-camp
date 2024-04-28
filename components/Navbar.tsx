'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";



const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <nav className={`flex justify-between 
    max-w-screen-xl mx-auto px-4 md:px-6
    lg:px-8 py-5 items-center relative z-30 ${isSticky ? ' rounded-b-xl sticky top-0 bg-white shadow-md' : ''}`}>
      <Link legacyBehavior href="/">

        <a className="cursor-pointer">
          <Image 
          src="/hilink-logo.svg" 
          width={74} 
          height={24} 
          alt="logo" />
        </a>

      </Link>

      <div className="hidden lg:flex 
      items-center space-x-12">
        <ul className="flex space-x-12">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>

              <Link 
              legacyBehavior 
              href={`#${link.key}`}>

                <a className="text-gray-500 mr-[55px] 
                hover:font-bold transition-all">
                    {link.label}
                    </a>

              </Link>
              
            </li>
          ))}
        </ul>

        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden">

        <button onClick={toggleMenu} 
        className="border-none block ml-[300px]
        text-gray-500 hover:text-gray-700">

          <Image 
          src="menu.svg" 
          alt="menu"
          height={32} 
          width={32} 
           />

        </button>

      </div>

      {/* Rendering the menu links directly with anchor tags */}
      {isMenuOpen && (

        <div className="lg:hidden absolute 
        top-full left-0 right-0 bg-white border
         border-gray-200 py-7 px-4 rounded-md
          shadow-lg text-center mt-[-15px]">

          <ul className="flex flex-col space-y-5">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href} 
                className="text-gray-500
                hover:font-bold transition-all">
                    {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
