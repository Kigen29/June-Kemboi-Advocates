import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import civil from "@/components/images/Civil.png";
import children from "@/components/images/Children.png";
import employment from "@/components/images/Employment.png";
import land from "@/components/images/Land.png";
import corporate from "@/components/images/Corporate.png";
import data from "@/components/images/Data.png";
import contracts from "@/components/images/Contract.png";
import conveyancing from "@/components/images/Conveyancing.png";
import commercial from "@/components/images/Commercial.png";
import bankruptcy from "@/components/images/Bankruptcy.png";

const serviceData = [
  {
    id: 1,
    image: criminal,
    link: "/criminal-litigation",
  },
  {
    id: 2,
    image: family,
    link: "/family-law",
  },
  {
    id: 3,
    image: corporate,
    link: "/corporate-litigation",
  },
  {
    id: 4,
    image: employment,
    link: "/employment-law",
  },
  {
    id: 5,
    image: children,
    link: "/children-matters",
  },
  {
    id: 6,
    image: civil,
    link: "/civil-litigation",
  },
  {
    id: 7,
    image: data,
    link: "/data-protection",
  },
  {
    id: 8,
    image: land,
    link: "/land-disputes",
  },
  {
    id: 9,
    image: contracts,
    link: "/contracts",
  },
  {
    id: 10,
    image: conveyancing,
    link: "/conveyancing",
  },
  {
    id: 11,
    image: commercial,
    link: "/commercial-law",
  },
  {
    id: 12,
    image: bankruptcy,
    link: "/bankruptcy",
  },
];

const Practice = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/Background.png')] bg-cover bg-center h-[50vh] content-center">
        <div className="flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            PRACTICE <span className="text-[#EFB34E]">AREAS</span>
          </h1>
        </div>
      </div>

      <div className="mt-10 mx-5">
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
      <div className="text-2xl font-bold border-b-2 border-[#EFB34E] w-1/4 mt-1">Our Services</div>

      </div>

      <section className="px-20 p-5 gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
          {serviceData.map(({ id, image, link }) => (
            <div key={id} className="border-none m-0">
              <Link href={link}>
                <div className="w-full p-3 transform transition duration-300 hover:scale-110 hover:-translate-y-2">
                  <Image
                    src={image}
                    alt="service"
                    className="flex"
                    width={500}
                    height={200}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Practice;
