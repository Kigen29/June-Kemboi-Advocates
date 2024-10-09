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

export default function Footer() {
  return (
    <section className="gap-9 bg-[#800000] px-5 py-6 flex w-full m-auto flex-row space-x-48 border-2 border-black">
      <div className="flex gap-10 flex-col">
        <div className="flex flex-row gap-10 ">
          <Image
            src={linkedin}
            alt="Description of the image"
            width={30}
            height={30}
            className="transform transition duration-300 hover:scale-110 hover:-translate-y-1"
          />

          <Image
            src={twitter}
            alt="Description of the image"
            width={30}
            height={30}
            className="transform transition duration-300 hover:scale-110 hover:-translate-y-1"
          />

          <Image
            src={facebook}
            alt="Description of the image"
            width={30}
            height={30}
            className="transform transition duration-300 hover:scale-110 hover:-translate-y-1"
          />

          <Image
            src={instagram}
            alt="Description of the image"
            width={30}
            height={30}
            className="transform transition duration-300 hover:scale-110 hover:-translate-y-1"
          />
        </div>
        <div>
          <p className="text-white text-lg">
            Injustice anywhere is a <br />
            threat to justice everywhere
          </p>
        </div>
        <div>
          <Image
            src={logo}
            alt="Description of the image"
            width={200}
            height={50}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="gap-10">
          <div className="flex flex-row gap-10">
            <Image
              src={email}
              alt="Description of the image"
              width={30}
              height={30}
            />
            <a
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=junekemboiadvocates@gmail.com"
              target="_blank"
            >
              <p className="text-lg text-white transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                junekemboiadvocates@gmail.com
              </p>
            </a>
          </div>

          <div className="flex flex-row gap-10 mt-5">
            <Image
              src={phone}
              alt="Description of the image"
              width={30}
              height={30}
            />
            <a rel="noopener noreferrer" href="tel:+254729317008">
              <p className="text-lg text-white transform transition duration-300 hover:scale-110 hover:-translate-y-1">
                +254 729 317008
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/* <MapProvider>
          <MapComponent />
        </MapProvider> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191010155374!2d36.81394867496566!3d-1.2823321987054765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d24eeafb23%3A0x1da7132c7598a8b0!2sMaendeleo%20House!5e0!3m2!1sen!2ske!4v1728468572700!5m2!1sen!2ske"
          width="300"
          height="300"
          style={{border:0}}
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
