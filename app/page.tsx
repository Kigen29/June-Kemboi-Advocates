import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import hero from "@/components/images/Hero Image.png";
import about from "@/components/images/About.png";
import criminal from "@/components/images/Criminal.png";
import family from "@/components/images/Family.png";
import corporate from "@/components/images/Corporate.png";
import { Card } from "@/components/ui/card";

const serviceData = [
  {
    id: 1,
    image: criminal,
    title: "Criminal Litigation",
  },
  {
    id: 2,
    image: family,
    title: "Family Law",
  },
  {
    id: 3,
    image: corporate,
    title: "Corporate Litigation",
  },
  {
    id: 4,
    image: corporate,
    title: "Corporate Litigation",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section className="flex border-2 p-5 border-black">
          <div className="flex flex-col gap-5 ml-24 mt-5">
            <h1 className="font-bold text-3xl">Your Trusted Legal Patner</h1>
            <p className="text-xl">
              Dedicated to Delivering Excellence in Legal
              <br />
              Services
            </p>
            <div className="mt-10">
              <PrimaryButton>Contact Us Today</PrimaryButton>
            </div>
          </div>
          <div className="ml-60">
            <Image
              src={hero}
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </section>
        <section className="px-10 border-2 p-5 border-black">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl flex justify-center">About Us</h1>
            <p className="text-xs flex justify-center">Know More About Us</p>
          </div>
          <div className="flex space-x-72 ">
            <div className="ml-8 mt-5">
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
                <PrimaryButton>Learn More</PrimaryButton>
              </div>
            </div>
          </div>
        </section>
        <section className="px-20 p-5 border-2 gap-20 border-black">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl flex justify-center">
              Practice Areas
            </h1>
            <p className="text-xs flex justify-center">
              Know More About Our Services
            </p>
          </div>
          <div className="flex mt-7 gap-20">
            <div className="flex justify-between border-none">
              {serviceData.map(({ id, image, title }) => (
                <div
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 pl-10 border-none m-0"
                >
                  <div className="p-3">
                    <Card
                      className="border-2 border-black rounded-4xl"
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-full">
                        <Image
                          src={image}
                          alt="snow"
                          className="flex size-60 p-3 "
                        />
                      </div>
                      <div className="bg-white pt-12 pb-10 px-5 -mt-6 rounded-b-3xl">
                        <div className="flex justify-center  gap-3">
                          <p className="text-black text-lg pb-2 font-bold">{title}</p>
                        </div>
                        <div className="flex justify-center mt-2 ">
                          <PrimaryButton>Learn More</PrimaryButton>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
