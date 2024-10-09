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

const Criminal = () => {
  const reasons = [
    {
      id: 1,
      title: "Contract Disputes:",
      description:
        "We represent businesses in contractual disputes, ensuring that your rights and interests are upheld throughout the legal process.",
    },
    {
      id: 2,
      title: "Shareholder & Partnership Disputes:",
      description:
        "We provide legal support for resolving internal disputes between shareholders and business partners, protecting both individual and corporate interests.",
    },
    {
      id: 3,
      title: "Regulatory Compliance & Disputes:",
      description:
        "Our team advises clients on regulatory matters and defends against enforcement actions and compliance disputes.",
    },
    {
      id: 4,
      title: "Commercial Transactions & Agreements: ",
      description:
        "We litigate cases related to mergers, acquisitions, and other business agreements, safeguarding your financial and legal position.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/criminal-litig.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CORPORATE <span className="text-[#EFB34E]">LITIGATION</span>
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
              <BreadcrumbPage>Corporate Litigation</BreadcrumbPage>
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
          , we offer comprehensive Corporate Litigation services to protect your
          business interests in legal disputes. We work with companies of all
          sizes, providing strategic representation and effective resolutions
          for complex corporate matters.
        </p>

        <p className="mt-10">Our Corporate Litigation Services include:</p>

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
            Our legal expertise ensures that your business is{" "}
            <span className="text-[#800000] font-bold">well-represented</span>{" "}
            in any {" "}
            <span className="text-[#EFB34E] font-bold">
              corporate litigation
            </span>{" "}
            matter.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Criminal;
