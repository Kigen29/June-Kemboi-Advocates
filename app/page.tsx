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
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row p-5 h-auto md:h-[460px] items-center">
          <div className="flex flex-col gap-5 ml-5 md:ml-24 mb-10 md:mb-0 mt-5 md:mt-12">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              Your Trusted Legal Partner
            </h1>
            <p className="text-base md:text-xl text-center md:text-left">
              Dedicated to Delivering Excellence in Legal
              <br />
              Services
            </p>
            <div className="mt-5 md:mt-10 flex justify-center md:justify-start">
              <Link href="/contact">
                <PrimaryButton>Contact Us Today</PrimaryButton>
              </Link>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:ml-16 flex justify-center">
            <Image
              src={hero}
              alt="Hero image"
              width={300}
              height={200}
              className="w-full md:w-[500px] h-auto"
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-5 sm:px-10 md:px-20 py-10 bg-[#800000] bg-opacity-5">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="md:basis-1/2 flex justify-center md:justify-start">
              <Image
                src={about}
                alt="About us image"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="md:basis-1/2 flex flex-col gap-5 justify-center text-center md:text-left">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                About Us
              </h1>
              <p className="text-sm md:text-base">
                We are committed to providing exceptional legal services,
                delivering personalized solutions with integrity,
                professionalism, and a focus on achieving the best results for
                our clients.
              </p>
              <div className="mt-5 md:mt-10 flex justify-center md:justify-start">
                <Link href="/about-us">
                  <PrimaryButton>Learn More</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="px-5 sm:px-10 md:px-20 py-10">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Practice Areas
            </h1>
            <p className="text-sm">Know More About Our Services</p>
          </div>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            {serviceData.map(({ id, image, link }) => (
              <div
                key={id}
                className="p-3 transform transition duration-300 hover:scale-110 hover:-translate-y-2"
              >
                <Link href={link}>
                  <Image
                    src={image}
                    alt="Service image"
                    className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto"
                    width={300}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5 transform transition duration-300 hover:scale-110 hover:-translate-y-1">
            <Link href="/practice-areas">
              <SecondaryButton>Learn More</SecondaryButton>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
