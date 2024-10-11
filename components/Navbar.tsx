"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/components/images/Logo.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <section className="flex justify-between items-center px-5 py-3 shadow-md">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Description of the image"
            width={120}
            height={120}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-8 bg-[#800000] bg-opacity-5 rounded-md h-16 items-center max-w-[900px] mx-auto">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Our Team", href: "/team" },
            { name: "Practice Areas", href: "/practice-areas" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 px-3 rounded hover:bg-[#800000] lg:hover:bg-transparent lg:hover:text-[#800000] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#800000] after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden absolute top-24 left-0 w-full bg-[#800000] shadow-md z-10`}
        >
          <ul className="flex flex-col space-y-4 py-4 items-baseline mx-10 text-[#FFFFFF]">
            {[
              { name: "Home", href: "/"},
              { name: "About Us", href: "/about-us" },
              { name: "Our Team", href: "/team" },
              { name: "Practice Areas", href: "/practice-areas" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
               
                <Link
                  href={item.href}
                  className="block py-2 px-3 rounded hover:text-[#EFB34E] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#EFB34E] after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
