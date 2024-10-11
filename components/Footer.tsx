import React from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-[#800000]">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:p-10">
        {/* Logo and Quote Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logotest.png"
            width={100}
            height={50}
            alt="logo"
            className="bg-white rounded-md hover:rounded-none transform transition duration-300"
          />
          <div className="mt-5 text-center md:text-left">
            <p className="text-sm lg:text-lg text-[#FFFFFF] font-bold">
              <span className="text-[#EFB34E]">Injustice</span> anywhere is
            </p>
            <p className="text-sm lg:text-lg text-[#FFFFFF] font-bold">
              a threat to <span className="text-[#EFB34E]">justice</span>{" "}
              everywhere.
            </p>
          </div>
          <div className="flex space-x-4 mt-5 text-white text-2xl">
            <FaLinkedin className="hover:scale-110 transition duration-300" />
            <FaXTwitter className="hover:scale-110 transition duration-300" />
            <FaSquareFacebook className="hover:scale-110 transition duration-300" />
            <FaInstagram className="hover:scale-110 transition duration-300" />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-3">
            <IoIosMail className="text-white text-xl" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=junekemboiadvocates@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-lg text-white hover:underline"
            >
              junekemboiadvocates@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white text-xl" />
            <a
              href="tel:+254729317008"
              className="text-sm lg:text-lg text-white hover:underline"
            >
              +254 729 317008
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="flex justify-center lg:justify-end">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191010155374!2d36.81394867496566!3d-1.2823321987054765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d24eeafb23%3A0x1da7132c7598a8b0!2sMaendeleo%20House!5e0!3m2!1sen!2ske!4v1728468572700!5m2!1sen!2ske"
            className="w-full h-64 md:w-[400px] md:h-[250px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <hr className="border-[#EFB34E] mx-4" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 text-xs lg:text-sm text-orange-100">
        <div className="flex space-x-4 mb-2 md:mb-0">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Legal Notice</p>
          <p className="hover:underline cursor-pointer">Terms of Service</p>
        </div>
        <p>@2024 June Kemboi Advocates</p>
      </div>
    </div>
  );
}
