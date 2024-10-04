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
    <section className="gap-10 bg-[#800000] px-10 py-12 flex w-full mt-2 max-w-[full] m-auto flex-row">
      <div className="flex gap-10 flex-col">
        <div className="flex flex-row gap-10">
          <Image
            src={linkedin}
            alt="Description of the image"
            width={50}
            height={50}
          />

          <Image
            src={twitter}
            alt="Description of the image"
            width={50}
            height={50}
          />

          <Image
            src={facebook}
            alt="Description of the image"
            width={50}
            height={50}
          />

          <Image
            src={instagram}
            alt="Description of the image"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="text-white text-2xl">
            Injustice anywhere is a <br />
            threat to justice everywhere
          </p>
        </div>
        <div>
          <Image
            src={logo}
            alt="Description of the image"
            width={300}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-col ml-48 ">
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

      <div className="flex flex-col ml-48">
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </section>
  );
}
