import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mission from "@/components/images/mission.png";
import vision from "@/components/images/vision.png";
import objectives from "@/components/images/objective.png";

const valuesData = [
  {
    id: 1,
    image: mission,
    title: "Mission",
    description: "Our mission is to provide fast, efficient, and cost-effective legal services."
  },
  {
    id: 2,
    image: vision,
    title: "Vision",
    description: "We aim to be the law firm of choice for businesses through quality service."
  },
  {
    id: 3,
    image: objectives,
    title: "Objectives",
    description: "To harmonize legal strategy with business goals for sustainable operations."
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="relative bg-[url('/Background.png')] bg-cover bg-center h-[50vh] content-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex justify-center">
            <h1 className="text-[#FFFFFF] text-5xl">
              ABOUT<span className="text-[#EFB34E]"> US</span>
            </h1>
          </div>
        </div>

        <div className="mt-5 mx-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <DividerVerticalIcon />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mt-5 mx-5">
          <div className="text-2xl font-bold border-b-2 border-[#EFB34E] w-1/4 mt-1">Overview</div>
          <p className="mt-2 ml-0 md:ml-48 mr-16 text-lg text-justify p-3">
            We are proud to offer personal and cost-effective service to all of our clients. June Kemboi Advocates continues to enjoy long-term relationships with our business and corporate clients, and we are even prouder that they continue to seek the advice and counsel of our team of experienced lawyers. As a firm that values our relationships with clients, we consider this the highest form of praise for our work.
          </p>
        </div>

        <div className="mt-5 mx-5">
          <div className="text-2xl font-bold border-b-2 border-[#EFB34E] w-1/4 mt-1">Who We Are</div>
          <p className="mt-2 ml-0 md:ml-48 mr-16 text-lg text-justify p-3">
            Our Vision is to endear ourselves as the law firm of choice through the provision of fast, efficient, and cost-effective legal services. Our specialized team of lawyers understand the powerful impact of disputes on our clients and are skilled at developing strategic alternatives to litigation. When litigation is inevitable, we know how to win in the courtroom.
          </p>
        </div>
      </section>

      <section className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {valuesData.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <h2 className="text-2xl font-bold">{title}</h2>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition duration-500 ease-in-out">
                <p className="mt-2 text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
