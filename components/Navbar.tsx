"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/components/images/Logo.png";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen] = useState(false);

  return (
    <>
      <section className="flex px-5 space-x-64 border-2 border-black">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Description of the image"
            width={150}
            height={150}
          />
        </Link>
        <nav className="h-16 mt-2 bg-[#800000] bg-opacity-5 rounded-full ">
          <div className="max-w-[1240px] mx-auto flex items-center justify-between p-4">
            <div
              className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:w-auto`}
            >
              <ul className="lg:flex lg:space-x-8 text-black mt-4 lg:mt-0">
                {[
                  "Home",
                  "About Us",
                  "Our Team",
                  "Practice Areas",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 px-3 rounded hover:bg-[#800000] lg:hover:bg-transparent lg:hover:text-[#800000] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#800000] after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
