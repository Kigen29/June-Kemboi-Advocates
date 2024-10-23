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

const Contracts = () => {
  const reasons = [
    {
      id: 1,
      title: "Drafting & Reviewing Contracts:",
      description:
        "We assist in drafting, reviewing, and advising on contracts, ensuring clarity and fairness to prevent future disputes.",
    },
    {
      id: 2,
      title: "Contract Negotiations:",
      description:
        "We represent clients during contract negotiations, ensuring that all terms are favorable and legally sound.",
    },
    {
      id: 3,
      title: "Breach of Contract:",
      description:
        "We handle cases involving breach of contract, seeking to resolve disputes and recover damages or enforce specific performance.",
    },
    {
      id: 4,
      title: "Contractual Dispute Resolution:",
      description:
        "Whether through negotiation, mediation, or litigation, we resolve disputes arising from contracts, ensuring the protection of our clients’ interests.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/Contract.jpeg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CONTRACT <span className="text-[#EFB34E]">LAW</span>
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
              <BreadcrumbPage>Contracts</BreadcrumbPage>
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
          , we provide comprehensive Contract Law services, offering legal support and 
          representation in a variety of contractual matters to safeguard your rights and interests.
        </p>

        <p className="mt-10">Our Contract Services include:</p>

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
            Our team is dedicated to providing{" "}
            <span className="text-[#800000] font-bold">detailed</span>{" "}
            and{" "}
            <span className="text-[#800000] font-bold">meticulous</span>{" "}
            legal support to ensure your business and personal contracts are 
            <span className="text-[#EFB34E] font-bold">{" "}
            legally
            </span>{" "}
            enforceable and protect your rights.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contracts;
