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
import criminal from "@/components/images/Criminal.png";
import family from "@/components/images/Family.png";
import corporate from "@/components/images/Corporate.png";

const serviceData = [
  {
    id: 1,
    image: criminal,
  },
  {
    id: 2,
    image: family,
  },
  {
    id: 3,
    image: corporate,
  },
  {
    id: 4,
    image: corporate,
  },
  {
    id: 5,
    image: corporate,
  },
  {
    id: 6,
    image: corporate,
  },
  {
    id: 7,
    image: corporate,
  },
  {
    id: 8,
    image: corporate,
  },
  {
    id: 9,
    image: corporate,
  },
];

const Practice = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[url('/Background.png')] bg-cover bg-center h-[60vh] content-center">
        <div className="absolute inset-0"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            PRACTICE <span className="text-[#EFB34E]">AREAS</span>
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
              <BreadcrumbPage>Practice Areas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="text-2xl font-bold underline underline-offset-4 decoration-4">
          Overview
        </h3>
      </div>

      <section className="px-20 p-5 gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
          {serviceData.map(({ id, image }) => (
            <div key={id} className="border-none m-0">
              <div className="w-full p-3 transform transition duration-300 hover:scale-110 hover:-translate-y-2">
                <Image
                  src={image}
                  alt="service"
                  className="flex"
                  width={500}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Practice;
