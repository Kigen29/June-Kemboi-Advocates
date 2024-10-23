import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { IoMdCheckboxOutline } from "react-icons/io";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Commercial = () => {
  const reasons = [
    {
      id: 1,
      title: "Business Formation & Structuring:",
      description:
        "We assist in the formation of businesses, advising on the best legal structure and ensuring all necessary documentation is in place.",
    },
    {
      id: 2,
      title: "Mergers & Acquisitions:",
      description:
        "We provide legal guidance through mergers, acquisitions, and other business transactions, ensuring smooth transitions and protection of your business interests.",
    },
    {
      id: 3,
      title: "Corporate Governance:",
      description:
        "We advise businesses on corporate governance matters, ensuring compliance with legal obligations and best practices.",
    },
    {
      id: 4,
      title: "Commercial Agreements:",
      description:
        "We draft, review, and negotiate commercial agreements to ensure that your business transactions are secure, transparent, and legally enforceable.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/Commercial.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            COMMERCIAL <span className="text-[#EFB34E]">LAW</span>
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
              <BreadcrumbLink href="/practice-areas">
                Practice Areas
              </BreadcrumbLink>
            </BreadcrumbItem>
            <DividerVerticalIcon />
            <BreadcrumbItem>
              <BreadcrumbPage>Commercial Law</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="text-2xl font-bold underline underline-offset-4 decoration-4">
          Overview
        </h3>
      </div>

      <div className="mt-5 mx-10">
        <p>
          At{" "}
          <span className="font-bold text- text-[#800000]">
          June Kemboi Advocates
          </span>
          ,we offer a wide range of Commercial Law services to support businesses in their legal needs, ensuring compliance and protection in all commercial activities.
        </p>

        <p className="mt-10">Our Commercial Law Services include:</p>

        {reasons.map((reason) => (
          <div
            className="flex flex-row items-start space-x-2 ml-5 mt-1"
            key={reason.id}
          >
            <div className="mt-1">
              <IoMdCheckboxOutline />
            </div>
            <div>
              <p>
                <span className="font-bold text-[#800000]">{reason.title}</span>{" "}
                {reason.description}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5 mb-10">
          <p>
            Our team provides{" "}
            <span className="text-[#800000] font-bold">strategic</span>{" "}
            legal advice and{" "}
            <span className="text-[#800000] font-bold">representation</span>{" "}
            to help businesses thrive while navigating the 
            <span className="text-[#EFB34E] font-bold">{" "}
            complexities
            </span>{" "}
            of commercial law.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Commercial;
