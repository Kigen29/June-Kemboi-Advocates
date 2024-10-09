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

const Bank = () => {
  const reasons = [
    {
      id: 1,
      title: "Insolvency Advice & Filing:",
      description:
        "We provide comprehensive advice on bankruptcy and insolvency matters, assisting clients in filing for bankruptcy or alternative debt relief options.",
    },
    {
      id: 2,
      title: "Debt Restructuring & Negotiation:",
      description:
        "We help clients restructure their debts through negotiations with creditors, aiming to reach workable payment plans and settlements.",
    },
    {
      id: 3,
      title: "Liquidation & Asset Protection:",
      description:
        "We guide clients through the liquidation process, ensuring fair treatment of assets and maximizing protection for their financial future.",
    },
    {
      id: 4,
      title: "Bankruptcy Litigation & Defense:",
      description:
        "We represent clients in bankruptcy-related litigation, defending their rights and interests throughout the process.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/civil-law.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            <span className="text-[#EFB34E]">BANKRUPTCY</span>
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
              <BreadcrumbPage>Bankruptcy</BreadcrumbPage>
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
          , we offer expert Bankruptcy services, helping individuals and
          businesses navigate the legal complexities of insolvency and debt
          relief. We provide practical advice and solutions for financial
          recovery.
        </p>

        <p className="mt-10">Our Bankruptcy Services include:</p>

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
          Our legal team is dedicated to helping clients achieve{" "}
            <span className="text-[#800000] font-bold">financial stability</span> and{" "}
            navigate the bankruptcy process with{" "}
            <span className="text-[#EFB34E] font-bold"> confidence.</span>
            
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bank;
