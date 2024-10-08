import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import hero from "@/components/images/Hero.png";
import about from "@/components/images/About.png";
import criminal from "@/components/images/Criminal.png";
import employment from "@/components/images/Employment.png";
import corporate from "@/components/images/Corporate.png";
import land from "@/components/images/Land.png";
import Link from "next/link";

const serviceData = [
  {
    id: 1,
    image: criminal,
    link: "/criminal-litigation",
  },
  {
    id: 2,
    image: employment,
    link: "/family-law",
  },
  {
    id: 3,
    image: corporate,
    link: "/corporate-law",
  },
  {
    id: 4,
    image: land,
    link: "/corporate-law",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section className="flex p-5 h-[460px] items-center">
          <div className="flex flex-col gap-5 ml-24 mt-12">
            <h1 className="font-bold text-3xl">Your Trusted Legal Patner</h1>
            <p className="text-xl">
              Dedicated to Delivering Excellence in Legal
              <br />
              Services
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <PrimaryButton>Contact Us Today</PrimaryButton>
              </Link>
            </div>
          </div>
          <div className="ml-48 ">
            <Image
              src={hero}
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </section>
        <section className="px-10 p-5 bg-[#800000] bg-opacity-5">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl flex justify-center">About Us</h1>
            <p className="text-xs flex justify-center">Know More About Us</p>
          </div>
          <div className="flex space-x-72 ">
            <div className="ml-8">
              <Image
                src={about}
                alt="Description of the image"
                width={400}
                height={300}
              />
            </div>
            <div className="flex flex-col gap-5 ml-36 mt-5">
              <p className="text-xl">
                June Kemboi Advocates is a trusted law <br />
                firm offering expert legal services <br />
                across various practice areas, including <br />
                corporate law, family law, real estate,
                <br />
                and litigation. We are dedicated to
                <br />
                delivering personalized solutions with
                <br />
                integrity, professionalism, and a focus
                <br />
                on achieving the best results for our clients.
              </p>
              <div className="mt-10">
                <Link href="/about-us">
                  <PrimaryButton>Learn More</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-20 p-5 gap-20">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl flex justify-center">
              Practice Areas
            </h1>
            <p className="text-xs flex justify-center">
              Know More About Our Services
            </p>
          </div>
          <div className="flex  flex-col mt-7 gap-20">
            <div className="flex border-none">
              {serviceData.map(({ id, image, link }) => (
                <div
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 pl-5 border-none m-0"
                >
                  <Link href={link}>
                    <div className="w-full p-3 transform transition duration-300 hover:scale-110 hover:-translate-y-2">
                      <Image
                        src={image}
                        alt="snow"
                        className="flex"
                        width={500}
                        height={300}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-7 transform transition duration-300 hover:scale-110 hover:-translate-y-1">
              <Link href="/practice-areas">
                <SecondaryButton>Learn More</SecondaryButton>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
