import React from "react";
import Image from "next/image";
import facebook from "@/components/images/icons8-facebook-240.png";
import linkedin from "@/components/images/icons8-linkedin-240.png";
import twitter from "@/components/images/icons8-twitterx-120.png";
import instagram from "@/components/images/icons8-instagram-240.png";
import logo from "@/components/images/Logo.png";
import phone from "@/components/images/icons8-phone-100.png";
import email from "@/components/images/icons8-email-100.png";
import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "./map";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#800000]">
      <div className="grid grid-cols-3">
        <div className="mt-4 ml-3 flex flex-col lg:gap-6 mb-3">
          <div>
            <Image
              src="/logotest.png"
              width={100}
              height={50}
              alt="logo"
              className="bg-white rounded-md hover:rounded-none transform transition duration-300"
            />
          </div>

          <div className="mt-5 lg:mt-3">
            <p className="text-sm text-wrap text-[#FFFFFF] font-bold lg:text-lg">
              <span className="text-[#EFB34E] font-bold">Injustice</span>{" "}
              anywhere is 
            </p>
            <p className="text-sm text-wrap text-[#FFFFFF] font-bold lg:text-lg">
              a threat to{" "}
              <span className="text-[#EFB34E] font-bold">justice</span>{" "}
              everywhere.
            </p>
          </div>

          <div className="flex flex-row space-x-2 text-[#ffffff] mt-5 lg:text-xl lg:space-x-3">
            <FaLinkedin />
            <FaXTwitter />
            <FaSquareFacebook />
            <FaInstagram />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:flex lg:justify-center lg:mr-10">
          <div className="flex flex-col lg:justify-center">
            <div className="flex flex-row space-x-1 items-center lg:space-x-2">
              <IoIosMail className="text-[#FFFFFF] lg:text-xl" />
              <a
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=junekemboiadvocates@gmail.com"
                target="_blank"
              >
                <p className="lg:text-lg text-xs text-white transform transition duration-300 hover:scale-90 hover:-translate-y-0">
                  junekemboiadvocates@gmail.com
                </p>
              </a>
            </div>

            <div className="flex flex-row space-x-1 items-center mt-2 lg:space-x-2">
              <FaPhoneAlt className="text-[#FFFFFF] text-xs" />
              <a rel="noopener noreferrer" href="tel:+254729317008">
                <p className="lg:text-lg text-xs text-white transform transition duration-300 hover:scale-90 hover:-translate-y-0">
                  +254 729 317008
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4">
          

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191010155374!2d36.81394867496566!3d-1.2823321987054765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d24eeafb23%3A0x1da7132c7598a8b0!2sMaendeleo%20House!5e0!3m2!1sen!2ske!4v1728468572700!5m2!1sen!2ske"
          // width="300"
          // height="300"
          style={{border:0}}
          className="lg:w-[400px] lg:h-[200px] w-[190px] h-[200px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        </div>
      </div>

      <hr className=" border-[#EFB34E] mx-2"></hr>

      <div className="grid grid-cols-2 mt-2 ml-3">

        <div className="flex flex-row gap-3 text-xs text-orange-100">

          <p>Privacy Policy</p>
          <p>Legal Notice</p>
          <p>Terms of service</p>

        </div>

        <div className="text-xs flex justify-end mr-3 text-orange-100 mb-3">
          <p>@2024 JuneKemboiAdvocates</p>
        </div>

      </div>
    </div>
  );
}
