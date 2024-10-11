import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import criminal from "@/components/images/Criminal.png";
import family from "@/components/images/Family.png";

const leadershipData = [
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
    image: family,
    link: "/family-law",
  },
];

const advocatesData = [
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
    image: family,
    link: "/family-law",
  },
];

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[url('/Background.png')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            OUR <span className="text-[#EFB34E]">TEAM</span>
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
              <BreadcrumbPage>Our Team</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="text-2xl font-bold underline underline-offset-4 decoration-4">
          Meet The Team
        </h3>
        <p className="mt-2 text-lg text-justify p-3">
          At June Kemboi Advocates, we pride ourselves on having a dedicated team of experienced and skilled professionals who are passionate about providing high quality legal services. Our diverse team of advocates specializes in various fields, including criminal litigation, family law, and more, ensuring that each case is handled with the utmost care and expertise. We believe in a client-focused approach, working closely with individuals and businesses to deliver tailored solutions to meet their legal needs.
        </p>
      </div>

      <section className="px-20 p-5 gap-20">
        <h1 className="text-2xl font-bold">Leadership</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {leadershipData.map(({ id, image, link }) => (
            <div key={id} className="border-none m-0">
              <Link href={link}>
                <div className="w-full p-3 transform transition duration-300 hover:scale-110 hover:-translate-y-2">
                  <Image
                    src={image}
                    alt="service"
                    className="flex"
                    width={400}
                    height={200}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-20 p-5 gap-20">
        <h1 className="text-2xl font-bold">Advocates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {advocatesData.map(({ id, image, link }) => (
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

export default Team;
