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

const Civil = () => {
  const reasons = [
    {
      id: 1,
      title: "Contract Disputes:",
      description:
        "We represent businesses in contractual disputes, ensuring that your rights and interests are upheld throughout the legal process.",
    },
    {
      id: 2,
      title: "Tort Claims:",
      description:
        "We handle civil wrongs such as defamation, negligence, and property disputes, advocating for compensation and justice for our clients.",
    },
    {
      id: 3,
      title: "Debt Recovery & Enforcement:",
      description:
        "We assist in recovering debts and enforcing judgments, using legal avenues to ensure financial remedies.",
    },
    {
      id: 4,
      title: "Injunctions & Remedies:  ",
      description:
        "We apply for injunctions and other legal remedies to protect our clients’ rights and interests.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/civil-law.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CIVIL <span className="text-[#EFB34E]">LITIGATION</span>
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
              <BreadcrumbPage>Civil Litigation</BreadcrumbPage>
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
          , we provide a wide range of Civil Litigation services, representing
          clients in non-criminal disputes to achieve fair resolutions through
          negotiation or courtroom advocacy.
        </p>

        <p className="mt-10">Our Civil Litigation Services include:</p>

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
            and{" "}
            <span className="text-[#800000] font-bold">tenacious</span>{" "}
            representation to achieve the
            <span className="text-[#EFB34E] font-bold">{" "}
            best
            </span>{" "}
            possible outcomes for our clients.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Civil;
