import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { IoMdCheckboxOutline } from "react-icons/io";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataP = () => {
  const reasons = [
    {
      id: 1,
      title: "Compliance & Regulatory Advice:",
      description:
        "We advise businesses on compliance with data protection laws, including GDPR and local privacy regulations.",
    },
    {
      id: 2,
      title: "Data Breach Response:",
      description:
        "We assist clients in responding to data breaches, managing legal implications, and ensuring swift remedial action.",
    },
    {
      id: 3,
      title: "Data Protection Policies & Audits:",
      description:
        "Our team helps businesses develop and implement robust data protection policies, ensuring the secure handling of personal information.",
    },
    {
      id: 4,
      title: "Litigation & Regulatory Defense:",
      description:
        "We represent clients in data protection-related disputes and enforcement actions, protecting their rights and business interests.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/data.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            DATA <span className="text-[#EFB34E]">PROTECTION</span>
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
              <BreadcrumbPage>Data Protection</BreadcrumbPage>
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
          , we provide expert Data Protection services, helping businesses
          comply with data privacy laws and protecting the personal information
          of clients and customers.
        </p>

        <p className="mt-10">Our Data Protection Services include:</p>

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
          Our team is committed to ensuring that our clients are fully{" "}
            <span className="text-[#800000] font-bold">protected</span> and{" "}
            <span className="text-[#800000] font-bold">compliant</span>{" "}
            with{" "}
            <span className="text-[#EFB34E] font-bold">
            data protection laws
            </span>{" "}
            in their operations.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DataP;
