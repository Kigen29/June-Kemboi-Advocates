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
    <section className="gap-10 bg-[#800000] px-5 py-6 flex w-full m-auto flex-row space-x-48 border-2 border-black">
      <div className="flex gap-10 flex-col">
        <div className="flex flex-row gap-10">
          <Image
            src={linkedin}
            alt="Description of the image"
            width={30}
            height={30}
          />

          <Image
            src={twitter}
            alt="Description of the image"
            width={30}
            height={30}
          />

          <Image
            src={facebook}
            alt="Description of the image"
            width={30}
            height={30}
          />

          <Image
            src={instagram}
            alt="Description of the image"
            width={30}
            height={30}
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
            <p className="text-lg text-white">junekemboiadvocates@gmail.com</p>
          </div>

          <div className="flex flex-row gap-10 mt-5">
            <Image
              src={phone}
              alt="Description of the image"
              width={30}
              height={30}
            />
            <p className="text-lg text-white">+254 729 317008</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </section>
  );
}
